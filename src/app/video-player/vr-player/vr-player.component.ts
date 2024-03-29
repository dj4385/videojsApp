import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

declare var videojs: any;

@Component({
  selector: 'app-vr-player',
  templateUrl: './vr-player.component.html',
  styleUrls: ['./vr-player.component.scss']
})
export class VrPlayerComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('target', {static: true}) target!: ElementRef;
  @Input() videoOption!: {src: string, type: string};
  player: any;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setUpVideoPlayer();
  }

  setUpVideoPlayer() {
    this.player = videojs(this.target.nativeElement, {});

    this.player.panorama({
      clickToToggle: true,
      clickAndDrag: true,
      autoMobileOrientation: true,
      initFov: 100,
      callback: function () {
        if(this.player) {
          this.player.play();
        }
      }
    });

    this.player.src({
      src: this.videoOption.src,
      type: this.videoOption.type
    })
  }

  ngOnDestroy() {
    if(this.player) {
      this.player.dispose();
    }
  }

}
