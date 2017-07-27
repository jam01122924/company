import { Injectable } from '@angular/core';

@Injectable()
export class SelectArrayService {
  private _selection: any;
  private _plan: any;
  private _price: string | number;
  constructor() {
    this.resetSelection();
    this.resetPlan();
    this.calcPrice();
  }

  resetSelection() {
    this._selection = {
      websiteType: {
        icon: 'fa fa-globe',
        title: 'WEBSITE TYPE',
        value: ['Personal Website', 'Company Website', 'Application Website', 'Social Website', 'Others'],
        explain: [
          'Personal Website could be used to express your personality to your friends and families, or show your works to obtain potential job position, or it could just for fun.',
          'Company Website is useful on introducing your company to more people, boosting your business as a result.',
          'Social Website is designed for online communication between groups of people. It could be as big as Facebook, but it also could also be as small as a resturant blog that post new dishes',
          'Application website is more like a cellphone app.',
          'Tell us what you have in mind!'
        ],
        selection: 0
      },
      websitePages: {
        icon: 'fa fa-clone',
        title: 'WEBSITE PAGES',
        value: ['Less than 10', '10 to 20', '20 to 50', '50 to 100', 'More than 100'],
        selection: 0
      },
      targetAudience: {
        icon: 'fa fa-users',
        title: 'TARGET AUDIENCE',
        value: ['Yourself and Your Friends', 'HRs and Headhunters', 'Employee Only', 'Customers', 'Open to Public'],
        selection: 0
      }, 
      dataRequirement: {
        icon: 'fa fa-database',
        title: 'DATA REQUIREMENT',
        value: ['Static Page', 'Minimum Data', 'Standard Data', 'High Volumn Data'],
        selection: 0
      },
      designLayout: {
        icon: 'fa fa-picture-o',
        title: 'DESIGN & LAYOUT',
        value: ['I need no design!', 'Make it look pretty!', 'I need a professional website!', 'I need a TOP level design'],
        selection: 0
      },
      mainPurpose: {
        icon: 'fa fa-dot-circle-o',
        title: 'MAIN PURPOSE',
        value: ['Fun & Joy', 'Presentation', 'Broadcast', 'Online Marketing', 'Social Media'],
        selection: 0
      }
    };
  }

  resetPlan() {
    this._plan = {
      numberOfPage: {
        icon: 'fa fa-sitemap',
        title: 'Number of Pages',
        value: ['1 - 10', '10 - 20', '20 - 50', '50 - 100', 'More than 100'],
        price: [1,2,3,4,5],
        selection: 0
      },
      design: {
        icon: 'fa fa-picture-o',
        title: 'Style of Design',
        value: ['No Design', 'Simple Design', 'Moderately Stylized', 'Top Level'],
        price: [10,20,30,40],
        selection: 0
      },
      SEO: {
        icon: 'fa fa-binoculars',
        title: 'Search Engine Optimization',
        value: ['None', '20 Keywords', '40 Keywords', '70 Keywords', '100 Keywords'],
        price: [100,200,300,400,500],
        selection: 0
      },
      ResponsiveDesign: {
        icon: 'fa fa-mobile',
        title: 'Responsive Design',
        value: ['None', 'Support Cellphone', 'Support All'],
        price: [1000,2000,3000,4000],
        selection: 0
      },
      Database: {
        icon: 'fa fa-database',
        title: 'Database Integration',
        value: ['None', 'Basic', 'Advanced', 'Expert'],
        price: [10000,20000,30000,40000],
        selection: 0
      },
      functionality: {
        icon: 'fa fa-cogs',
        title: 'Functionality',
        value: ['None', 'Simple', 'Advanced', 'Enterprise'],
        price: [100000,200000,300000,400000],
        selection: 0
      },
      CMS: {
        icon: 'fa fa-folder-open',
        title: 'Content Management System',
        value: ['None', 'Standard', 'Advanced', 'Enterprise'],
        price: [1000000,2000000,3000000,'To Be Discussed'],
        selection: 0
      }
    }

  }

  calcPlan() {
    this._plan.numberOfPage.selection = this._selection.websitePages.selection;
    this._plan.design.selection = this._selection.designLayout.selection;
    this._plan.SEO.selection = this._selection.mainPurpose.selection;
    if(this._selection.mainPurpose.selection===0 || this._selection.targetAudience.selection===0){
      this._plan.ResponsiveDesign.selection = 0;
    } else if (this._selection.mainPurpose.selection===1 || this._selection.mainPurpose.selection===2 || this._selection.targetAudience.selection===1) {
      this._plan.ResponsiveDesign.selection = 1;
    } else {
      this._plan.ResponsiveDesign.selection = 2;
    }    
    this._plan.Database.selection = this._selection.dataRequirement.selection;
    this._plan.functionality.selection = this._selection.websiteType.selection%4;
    if(this._selection.websiteType.selection===0 || this._selection.mainPurpose.selection===0){
      this._plan.CMS.selection = 0;
    } else if (this._selection.websiteType.selection===1 || this._selection.websiteType.selection===4) {
      this._plan.CMS.selection = 1;
    } else if (this._selection.mainPurpose.selection===1 || this._selection.mainPurpose.selection===2) {
      this._plan.CMS.selection = 2;
    } else {
      this._plan.CMS.selection = 3;
    }
    console.log(this._plan);
    console.log(this.calcPrice());
    
  }
  calcPrice() {
    this._price = 0;
    for(let p in this._plan){
      if(this._plan[p].price[this._plan[p].selection] === 'To Be Discussed'){
        return this._plan[p].price[this._plan[p].selection];
      } else {
        this._price += this._plan[p].price[this._plan[p].selection];
      }
    }
    return this._price;
  }

  getSelection(s) {
    return this._selection.hasOwnProperty(s)?this._selection[s].selection:0;
  }
  getPlan(s) {
    return this._plan.hasOwnProperty(s)?this._plan[s].selection:0;
  }
  getPrice() {
    return this._price?this._price:'Not Avalible';
  }
  getSelectionData(s) {
    return this._selection[s]?JSON.parse(JSON.stringify(this._selection[s])):{};
  }
  getPlanData(s) {
    return this._plan[s]?JSON.parse(JSON.stringify(this._plan[s])):{};
  }

  setSelection(prop, value) {
    if(this._selection.hasOwnProperty(prop)&&value!==undefined&&value!==null&&value>=0&&value<this._selection[prop].value.length) {
      this._selection[prop].selection = value;
      return true;
    }
  }
  setPlan(prop, value) {
    if(this._plan.hasOwnProperty(prop)&&value!==undefined&&value!==null&&value>=0&&value<this._plan[prop].value.length) {
      this._plan[prop].selection = value;
      return true;
    }
  }

}
