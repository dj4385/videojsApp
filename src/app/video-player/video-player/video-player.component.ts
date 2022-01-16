import { AfterViewInit, Component, ElementRef, Input, OnDestroy, OnInit, ViewChild } from '@angular/core';

declare var videojs: any;

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.scss']
})
export class VideoPlayerComponent implements OnInit, AfterViewInit, OnDestroy {
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
