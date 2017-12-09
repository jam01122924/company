import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {
  featureArray: any[];
  constructor() { }

  ngOnInit() {
    this.featureArray = [
      {
        title: "Designed Templates",
        content: "Well Designed Templates or Custom Your Own Design",
        image: "assets/imgs/snippet/webdesign.jpg",
      },
      {
        title: "Custom Domains",
        content: "Owns your stand out domain",
        image: "assets/imgs/snippet/domain.png",
      },
      {
        title: "Mobile Optimized",
        content: "Enhance cellphone user's UX with our mobile friendly design",
        image: "assets/imgs/snippet/mobileFriendly.jpg",
      },
      {
        title: "Google SEO",
        content: "With our google SEO, people can find your website easily on the web",
        image: "assets/imgs/snippet/seo.png",
      },
      {
        title: "Reliable Hosting",
        content: "Reliable and secure web hosting",
        image: "assets/imgs/snippet/server.png",
      },
      {
        title: "Social Integration",
        content: "We understand how social media is important for promoting your website. We are ready to send your website through the tunnels",
        image: "assets/imgs/snippet/socialMedia.jpg",
      },
    ]
  }

}
