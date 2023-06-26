import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import * as moment from 'moment';
import Quill from 'quill'
import BlotFormatter from 'quill-blot-formatter'
import {Post} from "../../core/models/post.model";
import {PostCategories, PostPrivacy, PostPrivacyString, PostStatus, PostStatusString} from "../../core/common.enum";
import {HttpClient} from "@angular/common/http";
import {TreeNode} from "../../core/models/tree.model";
import {DataService} from "../../core/services/data.services";

Quill.register('modules/blotFormatter', BlotFormatter)

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {
  templateForm: FormGroup;
  quillEditorModules = {};
  wordCount = 0;
  lastUpdated: any;
  postStatus = PostStatus;
  postStatusString = PostStatusString;
  postStatusSelected: PostStatus;
  postPrivacy = PostPrivacy;
  postPrivacyString = PostPrivacyString;
  postPrivacySelected: PostPrivacy;
  postCategories: any = [];
  postCategoriesFlat: any = [];
  day: string = moment().format('DD');
  month: string = moment().format('MM');
  year: string = moment().format('YYYY');
  hour: string = moment().format('HH');
  minute: string = moment().format('mm');
  timePost: string = 'Đăng ngay lập tức';

  @Input() post: Post = {
    status: this.postStatus.Draft,
    privacy: this.postPrivacy.Public
  };
  private interval: any;
  selectedParentCat: any;
  newCategoryName: any;


  constructor(private http: HttpClient, private dataService: DataService) {
    this.templateForm = new FormGroup({
      textEditor: new FormControl(""),
    });
    this.quillEditorModules = {
      blotFormatter: {}
    }
    this.lastUpdated = moment().locale("vn").format('dddd, DD MMMM yyyy, HH:mm');
    this.postStatusSelected = this.post.status
    this.postPrivacySelected = this.post.privacy
  }


  saveParagraph() {
    alert(this.templateForm.get('textEditor')!.value);
  }

  contentChange(event: any) {
    this.wordCount = event.text && event.text !== '\n' ? event.text.trim().split(' ').length : 0;
    if (this.interval) {
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.lastUpdated = moment().format('dddd, DD MMMM yyyy, HH:mm');
    }, 1000)
  }

  setTimeForPostSchedule() {
    const selectedDate = moment(`${this.year}-${this.month}-${this.day} ${this.hour}:${this.minute}`);
    if (selectedDate.diff(moment()) > 0) {
      this.timePost = `Đăng vào <b>ngày ${selectedDate.format('DD')} tháng ${selectedDate.format('MM')} năm ${selectedDate.format('YYYY')} <br> vào lúc ${selectedDate.format('HH:mm')}</b>`
      this.post.schedule = selectedDate.format();
    } else {
      this.timePost = 'Đăng ngay lập tức';
    }
  }

  check() {
    console.log(this.postCategories)
  }



  ngOnInit(): void {
    this.dataService.loadCategory().subscribe((cats: any) => {
      this.postCategories = cats.hierarchy;
      this.postCategoriesFlat = cats.flat;
    })
  }

  selectParentCat(cat?: any) {
    this.selectedParentCat = cat
  }

  addNewCategory() {
    this.dataService.createCategory(this.newCategoryName, this.selectedParentCat?.id).subscribe(res => {
      if(res){
        this.dataService.loadCategory().subscribe((cats: any) => {
          this.postCategories = cats.hierarchy;
          this.postCategoriesFlat = cats.flat;
        })
      }
    })
  }
}
