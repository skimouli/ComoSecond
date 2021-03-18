import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-porject-details',
  templateUrl: './porject-details.component.html',
  styleUrls: ['./porject-details.component.scss']
})
export class PorjectDetailsComponent implements OnInit {




 erc = 'http://www.africau.edu/images/default/sample.pdf'
constructor(private activatedRoute: ActivatedRoute,
  private sanitizer: DomSanitizer) {
  }

 Url :string;
  project: any;
  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe(
      (data: ParamMap) => this.project = data.get('document'))
    this.Url = this.Base64ToBlob(this.project);
  }



  downloadPdf(base64String, fileName) {
    const source = `data:application/pdf;base64,${base64String}`;
    const link = document.createElement("a");
    link.href = source;
    link.download = `${fileName}.doc`
    link.click();
  }
  onClickDownloadPdf() {
    //let base64String = "your-base64-string";
    this.downloadPdf(this.project, "sample");
  }

  Base64ToBlob(base64) {
    var byteCharacters = atob(base64);
    var byteNumbers = new Array(byteCharacters.length);
    for (var i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    var byteArray = new Uint8Array(byteNumbers);
    var blob = new Blob([byteArray], { type: "application/pdf" });
    return URL.createObjectURL(blob);
    //window.open(fileURL, '_blank');
  }
}
