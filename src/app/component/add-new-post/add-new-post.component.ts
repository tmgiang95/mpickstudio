import {Component} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import * as moment from 'moment';
import Quill from 'quill'
import BlotFormatter from 'quill-blot-formatter'

Quill.register('modules/blotFormatter', BlotFormatter)

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent {
  templateForm: FormGroup;
  quillEditorModules = {};
  wordCount = 0;
  lastUpdated: any;
  private interval: any;

  constructor() {
    this.templateForm = new FormGroup({
      textEditor: new FormControl(""),
    });
    this.quillEditorModules = {
      blotFormatter: {}
    }
    this.lastUpdated = moment().locale("vn").format('dddd, DD MMMM yyyy, HH:mm');
  }

  saveParagraph() {
    alert(this.templateForm.get('textEditor')!.value);
  }

  contentChange(event: any) {
    this.wordCount = event.text && event.text !=='\n' ? event.text.trim().split(' ').length : 0;
    if(this.interval){
      clearInterval(this.interval);
    }
    this.interval = setInterval(() => {
      this.lastUpdated = moment().format('dddd, DD MMMM yyyy, HH:mm');
    }, 1000)
  }
}
