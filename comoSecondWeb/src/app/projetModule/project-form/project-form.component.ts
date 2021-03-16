import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Project } from '../../shared/model/projet';
import { ResourceService } from '../../shared/module/core/service/resourceService';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.scss']
})
export class ProjectFormComponent implements OnInit {

  constructor(private fb: FormBuilder,
    private service: ResourceService) { }
  myForm: FormGroup;
  fileToUpload: string = null;
  imageToUpload: string = null;
  ngOnInit(): void {
    this.myForm = this.fb.group({
      title: ['', Validators.required],
      colaborateur: ['', Validators.required],
      descriptif: ['', Validators.required],
      document: ['', Validators.required],
      image: ['', Validators.required]
    }
    )
  }

  AddProject() {
    let projet: Project = {
      title: this.myForm.value.title,
      colaborateur: this.myForm.value.colaborateur,
      descriptif: this.myForm.value.descriptif,
      document: this.fileToUpload,
      image: this.imageToUpload
    }
    //this.service.creat(projet, 'https://localhost:44371/Projet').subscribe();
    console.log(this.fileToUpload);
    console.log(this.imageToUpload);
  }

  changeFile(file) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }

  uploadFile(event) {
    if (event.target.value) {
      const file = event.target.files[0];
      const type: string = file.type;
      this.changeFile(file).then((base64: string): any => {
        //console.log(type);
        //this.fileBlob = this.b64Blob([base64], type);
        //console.log(this.fileBlob)
        if (type.startsWith('image')) { this.imageToUpload = base64; }
        else { this.fileToUpload = base64; }
      });
    } else alert('Nothing')
  }

}
