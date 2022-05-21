import { Component, OnInit } from '@angular/core';
import { AvatarService } from "../../services/vendor_user_management/avatar.service";
import { environment } from "../../../environments/environment";
import { AvatarSendRequestI } from "../../shared/interfaces/vendor_user_management/avatar.I"
import { MatDialog } from '@angular/material/dialog';
import { DeleteConfirmationComponent } from '../../shared/delete-confirmation/delete-confirmation.component';
import { ToastService } from 'src/app/services/toast.service';
import { ImageCroppedEvent } from 'ngx-image-cropper';

interface filePrivew {
  [index: number]: File
}
declare var $: any;
@Component({
  selector: 'app-avatars',
  templateUrl: './avatars.component.html',
  styleUrls: ['./avatars.component.scss']
})
export class AvatarsComponent implements OnInit {



  closeIconBoys1: boolean = true;
  closeIconGirls1: boolean = true;
  // normalIMGBoys1: boolean = true;
  // dragAndDropIMGBoys1: boolean = false;

  // normalIMGBoys2: boolean = true;
  // closeIconBoys2: boolean = true;
  // dragAndDropIMGBoys2: boolean = false;

  // normalIMGGirls1: boolean = true;
  // closeIconGirls1: boolean = true;
  // dragAndDropIMGGirls1: boolean = false;

  // normalIMGGirls2: boolean = true;
  // closeIconGirls2: boolean = true;
  // dragAndDropIMGGirls2: boolean = false;

  files: File[] = [];
  fileObject: filePrivew;
  file: File;
  fileObjectG: filePrivew;

  imageChangedEvent: any = '';
  croppedImage: any = '';
  triggerCropper: boolean = false;

  public girlsAvatars: any[] = [];
  public boysAvatars: any[] = [];
  public defaultSet: Number[] = [1, 2, 3, 4, 5, 6];
  public maxFZ = 5242880;
  public avatarRequestObj: AvatarSendRequestI = {
    name: "a2",
    type: "",
    status: "ACTIVE",
    media: ""
  }

  constructor(
    private _avatarService: AvatarService,
    private dialog: MatDialog,
    private toastService: ToastService
  ) { }


  ngOnInit(): void {
    this._avatarService.getAvatars().subscribe((res: any) => {
      if (res.length > 0) {
        this.girlsAvatars = res.filter((item) => {
          return item.type == "GIRL";
        });
        this.boysAvatars = res.filter((item) => {
          return item.type == "BOY";
        });
      }
    })

  }

  public showSuccess() {
    this.toastService.showSuccess('Avatar uploaded successfully!');
  }

  public showDanger(text = "Avatar is deleted!") {
    this.toastService.showDanger(text);
  }

  public onSelect(event, index, type) {
    if (event.addedFiles.length) {
      if (type == "b") {
        this.fileObject = {
          ...this.fileObject,
          [index]: event.addedFiles[0]
        }
        this.files.push(...event.addedFiles);
        event.target = {
          files: event.addedFiles
        }
        this.fileChangeEvent(event);
      } else {
        this.fileObjectG = {
          ...this.fileObjectG,
          [index]: event.addedFiles[0]
        }
        this.files.push(...event.addedFiles);
        event.target = {
          files: event.addedFiles
        }
        this.fileChangeEvent(event);
      }
      this.avatarRequestObj.type = type == "b" ? "BOY" : "GIRL";
    } else {
      this.showDanger("Image not valid.");
    }
  }

  public onRemove(index) {
    delete this.fileObject[index];
    // this.croppedImage = '';
    // console.log(event);
    // this.files.splice(this.files.indexOf(event), 1);
  }

  cropImage() {
    this.triggerCropper = false;
    this.avatarRequestObj.media = this.croppedImage;
    this._avatarService.saveAvatar(this.avatarRequestObj).subscribe((res) => {
      if (res) {
        if (res.type == "BOY") {
          this.boysAvatars.push(res);
        } else {
          this.girlsAvatars.push(res);
        }
        this.files.length = 0;
        // alert("Avatars save successfully!");
        this.toastService.showSuccess('Avatar uploaded successfully!');
      }
    })
  }


  // public showDragAndDropBoys1() {
  //   this.normalIMGBoys1 = false;
  //   this.closeIconBoys1 = false;
  //   this.dragAndDropIMGBoys1 = true;
  // }

  // public showDragAndDropBoys2() {
  //   this.normalIMGBoys2 = false;
  //   this.closeIconBoys2 = false;
  //   this.dragAndDropIMGBoys2 = true;
  // }

  // public showDragAndDropGirls1() {
  //   this.normalIMGGirls1 = false;
  //   this.closeIconGirls1 = false;
  //   this.dragAndDropIMGGirls1 = true;
  // }

  // public showDragAndDropGirls2() {
  //   this.normalIMGGirls2 = false;
  //   this.closeIconGirls2 = false;
  //   this.dragAndDropIMGGirls2 = true;
  // }

  public avatarMedia(media: String) {
    return `${environment.backedUrl}${media}`;
  }

  public deleteRecode(_id, index, type) {
    if (_id) {
      this._avatarService.deleteAvatar(_id).subscribe((res: any) => {
        if (res.success) {
          type == "b" ? this.boysAvatars.splice(index, 1) : this.girlsAvatars.splice(index, 1);

          if (type == "b" && this.fileObject && this.fileObject.hasOwnProperty(index)) {
            delete this.fileObject[index];
          } else if (type == "g" && this.fileObjectG && this.fileObjectG.hasOwnProperty(index)) {
            delete this.fileObjectG[index];
          }
          this.showDanger();
          this.croppedImage = '';

        } else {
          if (res.hasOwnProperty("message") && res.message.split(".")[0])
            this.showDanger(res.message.split(".")[0]);
        }
      });
    }
  }

  deleteConfirmation(_id, index, type): void {
    const dialogRef = this.dialog.open(DeleteConfirmationComponent, {
      data: {
        title: "Are You Sure ?",
      },
      panelClass: ['custom-dialog-class']
    });
    dialogRef.afterClosed().subscribe(dialogResult => {
      console.log("dialogResult", dialogResult);
      if (dialogResult) {
        this.deleteRecode(_id, index, type)
      }
    });
  }

  DeleteConfirmationComponent(DeleteConfirmationComponent: any, arg1: { maxWidth: string; data: { title: string; }; }) {
    throw new Error('Method not implemented.');
  }


  closeCropImage() {
    this.triggerCropper = false;
    this.files.length = 0;
  }

  fileChangeEvent(event: any): void {
    this.triggerCropper = true;
    this.imageChangedEvent = event;
  }
  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
  }

  imageLoaded() {
		// show cropper
	}
	cropperReady() {
		// cropper ready
	}
	loadImageFailed() {
		// show message
	}







}
