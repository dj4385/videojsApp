import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var videojs: any;

@Component({
  selector: 'app-ad-cue-points',
  templateUrl: './ad-cue-points.component.html',
  styleUrls: ['./ad-cue-points.component.scss']
})
export class AdCuePointsComponent implements OnInit {

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

    this.player.on('loadstart', () => {
      let cuePointsAra = [],
      adCuePointsAra = [],
      videoDuration;

      // +++ Get ad cue points from all cue points +++
      // Extract cue points array from mediainfo
      cuePointsAra = this.player.mediainfo.cuePoints;

      // Extract ad cue points from all cue points
      adCuePointsAra = cuePointsAra.filter(this.isAdCuePoint);

      // Get the video duration
      videoDuration = this.player.mediainfo.duration;

      // Add cuePoint markers for ad cue points
      this.addAdMarkers(adCuePointsAra, videoDuration);

    })

    this.player.src({
      src: this.videoOption.src,
      type: this.videoOption.type
    })
  }

  // +++ Filter array on ad cue points +++
  isAdCuePoint(cuePoint: any) {
    return cuePoint.type == 'AD';
  }

  // +++ Add AD cue point markers +++
  addAdMarkers(adCuePointsAra: any, videoDuration: number) {
    var iMax = adCuePointsAra.length,
    i,
    playheadWell = document.getElementsByClassName('vjs-progress-control vjs-control')[0];
    // Loop over each cue point, dynamically create a div for each
    // then place in div progress bar
    for (i = 0; i < iMax; i++) {
      var elem = document.createElement('div');
      elem.className = 'vjs-marker';
      elem.id = 'ad' + i;
      elem.style.left = (adCuePointsAra[i].time / videoDuration) * 100 + '%';
      playheadWell.appendChild(elem);
    }
  }

  ngOnDestroy() {
    if(this.player) {
      this.player.dispose();
    }
  }

}
