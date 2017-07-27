import { Injectable } from '@angular/core';

@Injectable()
export class ValueService {
  private _constValue:any = {};
  private _url:any = {};
  public pages: any = {};

  constructor() {
    this._url = {
      root: 'http://127.0.0.1:8998/api/',
      login: 'api-token-auth/',
      refreshToken: 'api-token-verify/',
      register: 'user-info/users/',
      users: 'user-info/users/',
      character: 'character/',
      map: {
        openStreetMapSearch: 'http://nominatim.openstreetmap.org/search',
        tileLayer: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        realtorSearch: 'https://api2.realtor.ca/Listing.svc/PropertySearch_Post',
      }
    };

    this.pages = {
      home: {
        advertiseItemArray: [
          {
            color: '#CCC',
            pic: '/assets/imgs/pages/home/home-advertise-001.jpg',
            fadeImg: true,
            fadeStyle: {
              'width': '100vw',
              'height': '100%',
              'position': 'absolute',
              'top': '0',
              'background': '-webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 40%'
            },
            header: 'BROADCAST',
            text: [
                    'Start Broadcast You Business Now',
                    'By Deploying a Crispy Website', 
                    'that MEETs your NEEDs.'
                  ],
            contentStyle: {
              'padding': '10px 10px 25px 10px',
              'top': 'calc(20vw - 160px)',
              'height': 'auto'
            },
            contentSide: 'left',
            renderText: true,
            btnLink: '/plans',
            btnText: 'Start Now'
          },
          {
            containerStyle: {'background': 'rgba(0,0,0,0.8)', 'padding': '5vw 0', 'border-top': 'none', 'border-bottom': '2px solid #EEEEEE'},
            color: '#CCC',
            pic: '/assets/imgs/pages/home/home-advertise-005.png',
            picStyle: {'width': '80%', 'margin': '40px 10% 0 10%'},
            header: 'BEST VALUE',
            text: [
                    'We provide ALL and ONLY what you need.',
                    'Services are divided into many small packages.', 
                    'Choose what you need to achieve goals, and save money.'
                  ],
            contentSide: 'right',
            renderText: false,
            btnLink: '/solution',
            btnText: 'Find Out'
          },
          {
            color: '#CCC',
            pic: '/assets/imgs/pages/home/home-advertise-003.png',
            header: 'ROAD MAP',
            text: [
                    'Do not have a clear picture of what you need?',
                    'No worries, we are here to help you.'
                  ],
            fadeImg: true,
            fadeStyle: {
              'width': '100vw',
              'height': '100%',
              'position': 'absolute',
              'top': '0',
              'background': '-webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 10%'
            },
            contentStyle: {
              'padding': '10px 10px 25px 10px',
              'background-color': 'rgba(0, 0, 0, 0.4)',
              'top': 'calc(20vw - 160px)',
              'height': 'auto',
            },
            contentSide: 'right',
            btnLink: '/contact-us',
            btnText: 'Find Answer'
          },
          {
            color: 'red',
            bg: 'rgb(244,162,37)',
            pic: '/assets/imgs/pages/home/home-advertise-002.jpg',
            header: 'Business Website',
            text: [
                    'We keep you websites simple and easy to use.',
                    'Just like the way you would prefer.'
                  ]
          }
        ],
        flashContent: 'Let us test how fast people like you can read from a website when the content is displayed in a proper way   ' + 
          'Most people can read about 200 words per minute   ' + 
          'That is because there is an inner voice in their head when they read   ' + 
          'So they can only read as fast as they can speak   ' + 
          'Let us say we want to broadcast our business to the target audience   ' + 
          'And you got their attention for 3 minutes   ' + 
          'Which is about the same length of a commercial advertisement on TV   ' +
          'Either in voice or text  they can hear or read about 600 words during that time   ' + 
          'Which may not be good enough to let them remember you   ' +
          " We We can can help help to to improve improve people's people's memories memories about about you you  "
      },
      solution: {
        advertiseItemArray: [
          {
            color: '#EEEEEE',
            pic: '/assets/imgs/pages/home/home-advertise-003.png',
            header: 'What In Mind?',
            text: [
                    'Please fill the following options.', 
                    'They can help us to understand your needs,',
                    'and allow us to build you a suitable website',
                    'with LOW cost.',
                  ],
            fadeImg: true,
            fadeStyle: {
              'width': '100vw',
              'height': '100%',
              'position': 'absolute',
              'top': '0',
              'background': '-webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 15%'
            },
            contentStyle: {
              'padding': '10px 10px 25px 10px',
              'margin-bottom': '25px',
              'top': 'calc(20vw - 150px)',
              'background': 'rgba(0, 0, 0, 0.5)',
              'line-height': '1.75em'
            },
            contentSide: 'center'
          }
        ],
        specArray: [
          {
            name: 'AngularJS',
            image: '/assets/imgs/angular-blueprint.gif',
            icon: '/assets/imgs/angularjs.png',
            content: [
              {
                class: [],
                text: 'Years of experience working with '
              },
              {
                class: ['strong'],
                text: 'AngularJS '
              },
            ]
          }
        ]
      },
      plans: {
        // advertiseItemArray: [
        //   {
        //     color: '#CCC',
        //     pic: '/assets/imgs/pages/home/home-advertise-001.jpg',
        //     fadeImg: true,
        //     fadeStyle: {
        //       'width': '100vw',
        //       'height': '100%',
        //       'position': 'absolute',
        //       'top': '0',
        //       'background': '-webkit-linear-gradient(bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3) 30%, rgba(0,0,0,0) 40%'
        //     },
        //     header: 'BROADCAST',
        //     text: [
        //             'Start Broadcast You Business Now',
        //             'By Deploying a Crispy Website', 
        //             'that MEETs your NEEDs.'
        //           ],
        //     contentStyle: {
        //       'padding': '10px 10px 25px 10px',
        //       'top': 'calc(20vw - 160px)',
        //       'height': 'auto'
        //     },
        //     contentSide: 'left',
        //     renderText: true,
        //     btnLink: '/plans',
        //     btnText: 'Start Now'
        //   },
        // ],
        planArray: [
          {
            title: 'Basic',
            subTitle: 'Budget Plan',
            price: '$499',
            unit: 'per website',
            features: [
              {
                icon: '',
                text: '1 year free hosting *'
              },
              {
                icon: '',
                text: 'standard theme'
              },
              {
                icon: '',
                text: 'max 5 pages'
              },
              {
                icon: '',
                text: '2 hours of free training'
              },
              {
                icon: '',
                text: '2 month of free maintains'
              }
            ]
          },
        ],
      }
    }
  }

  get constValue():any {
    return this._constValue;
  }

  get url():any {
    return this._url;
  }
}
