import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare let videojs: any;

@Component({
  selector: 'app-ima-ads',
  templateUrl: './ima-ads.component.html',
  styleUrls: ['./ima-ads.component.scss']
})
export class ImaAdsComponent implements OnInit {
  @ViewChild('target', {static: true}) target!: ElementRef;
  @Input() videoOption!: {src: string, type: string};
  player: any;
  videoAdsOptions = {
    id: 'content_video',
    adTagUrl: 'http://pubads.g.doubleclick.net/gampad/ads?sz=640x480&iu=/124319096/external/ad_rule_samples&ciu_szs=300x250&ad_rule=1&impl=s&gdfp_req=1&env=vp&output=xml_vmap1&unviewed_position_start=1&cust_params=sample_ar%3Dpremidpostpod%26deployment%3Dgmf-js&cmsid=496&vid=short_onecue&correlator='
  }

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.setUpVideoPlayer();
  }

  setUpVideoPlayer() {
    this.player = videojs(this.target.nativeElement, {});

    this.player.ima(this.videoAdsOptions);

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
