import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { AlertModule, CarouselModule, AccordionModule, DropdownModule, ProgressbarModule, TabsModule } from 'ng2-bootstrap';

// // ********************** angular-modal-gallery *****************************
// import 'hammerjs'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save hammerjs`)
// import 'mousetrap'; // Mandatory for angular-modal-gallery 3.x.x or greater (`npm i --save mousetrap`)
// import { ModalGalleryModule } from 'angular-modal-gallery'; // <----------------- angular-modal-gallery library import
// // **************************************************************************

import { AppComponent } from './app.component';
import { LoginComponent } from './common/login/login.component';
import { RegisterComponent } from './common/register/register.component';
import { HomeComponent } from './ui/home/home.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { HeaderComponent } from './common/header/header.component';
import { MenuItemComponent } from './common/header/menu-item/menu-item.component';

import { HttpService } from './services/http.service';
import { AuthService } from './services/auth.service';
import { ValueService } from './services/value.service';
import { TokenService } from './services/token.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';
import { DeviceService } from './services/device.service';
import { MenuService } from './services/menu.service';
import { GeoService } from './services/geo.service';
import { SelectArrayService } from './services/selectArray.service';
import { GalleryService } from './services/gallery.service';


import { GamesComponent } from './ui/games/games.component';

// Z-Survival Game:
import { ZSurvivalComponent } from './games/z-survival/z-survival.component';
import { ZMainComponent } from './games/z-survival/ui/z-main/z-main.component';
import { ZBottomMenuComponent } from './games/z-survival/common/z-bottom-menu/z-bottom-menu.component';
import { ZBottomMenuItemComponent } from './games/z-survival/common/z-bottom-menu/z-bottom-menu-item/z-bottom-menu-item.component';
import { ZHideComponent } from './games/z-survival/ui/z-main/z-hide/z-hide.component';
import { ZMainHeaderComponent } from './games/z-survival/common/z-main-header/z-main-header.component';
import { SelfieComponent } from './common/selfie/selfie.component';
import { HeaderUserStatusComponent } from './common/header/header-user-status/header-user-status.component';
import { OpenTaleComponent } from './games/z-survival/ui/open-tale/open-tale.component';
import { CharacterCreateComponent } from './games/z-survival/ui/character-create/character-create.component';
import { StartMenuComponent } from './games/z-survival/ui/start-menu/start-menu.component';
import { ZConfirmPanelComponent } from './games/z-survival/common/z-confirm-panel/z-confirm-panel.component';

import { MainPipe } from './games/z-survival/common/directives/pipe/main.pipe';
import { CharacterSelectComponent } from './games/z-survival/ui/character-select/character-select.component';
import { LoadingComponent } from './games/z-survival/ui/loading/loading.component';
import { InputDebounceComponent } from './games/z-survival/common/directives/input-debounce/input-debounce.component';
import { ZMeComponent } from './games/z-survival/ui/z-main/z-me/z-me.component';
import { ZSubHeaderComponent } from './games/z-survival/common/z-sub-header/z-sub-header.component';
import { ZMeStatusComponent } from './games/z-survival/ui/z-main/z-me/z-me-status/z-me-status.component';
import { ZMeSkillComponent } from './games/z-survival/ui/z-main/z-me/z-me-skill/z-me-skill.component';
import { ZMeTalentComponent } from './games/z-survival/ui/z-main/z-me/z-me-talent/z-me-talent.component';
import { ZMeEquipmentComponent } from './games/z-survival/ui/z-main/z-me/z-me-equipment/z-me-equipment.component';
import { ZMeInventoryComponent } from './games/z-survival/ui/z-main/z-me/z-me-inventory/z-me-inventory.component';
import { ZMapComponent } from './games/z-survival/ui/z-main/z-map/z-map.component';
import { TechListPanelComponent } from './ui/home/tech-list-panel/tech-list-panel.component';
import { TechItemComponent } from './ui/home/tech-list-panel/tech-item/tech-item.component';
import { AdvertiseItemComponent } from './common/advertise-item/advertise-item.component';
import { FlashItemComponent } from './common/flash-item/flash-item.component';
import { SolutionComponent } from './ui/solution/solution.component';
import { PlanComponent } from './ui/plan/plan.component';
import { SpecComponent } from './ui/solution/spec/spec.component';
import { SelectArrayComponent } from './common/select-array/select-array.component';
import { FooterComponent } from './common/footer/footer.component';
import { PlanItemComponent } from './common/plan-item/plan-item.component';
import { PlanItemListComponent } from './common/plan-item/plan-item-list/plan-item-list.component';
import { ProductComponent } from './ui/product/product.component';
import { MapChartComponent } from './ui/product/map-chart/map-chart.component';
import { ProductListComponent } from './ui/product/product-list/product-list.component';
import { ProductListItemComponent } from './ui/product/product-list/product-list-item/product-list-item.component';
import { ThreedDemoComponent } from './ui/product/3d-demo/3d-demo.component';
import { ThreeDCanvasComponent } from './common/three-d-canvas/three-d-canvas.component';
import { BarChartComponent } from './common/charts/bar-chart/bar-chart.component';
import { D3ChartsDemoComponent } from './ui/product/d3-charts-demo/d3-charts-demo.component';
import { GalleryComponent } from './ui/gallery/gallery.component';
import { GalleryListComponent } from './ui/gallery/gallery-list/gallery-list.component';
import { GalleryShowComponent } from './ui/gallery/gallery-show/gallery-show.component';
import { GalleryMapComponent } from './ui/gallery/gallery-show/gallery-map/gallery-map.component';
import { GalleryListItemComponent } from './ui/gallery/gallery-list/gallery-list-item/gallery-list-item.component';
import { CarouselComponent } from './common/carousel/carousel.component';
import { CarouselImageListComponent } from './common/carousel/carousel-image-list/carousel-image-list.component';
import { CarouselImageComponent } from './common/carousel/carousel-image-list/carousel-image/carousel-image.component';
import { CarouselThumbNailListComponent } from './common/carousel/carousel-thumb-nail-list/carousel-thumb-nail-list.component';
import { CarouselThumbNailComponent } from './common/carousel/carousel-thumb-nail-list/carousel-thumb-nail/carousel-thumb-nail.component';
import { FindUsComponent } from './ui/find-us/find-us.component';
import { FeaturesComponent } from './ui/features/features.component';
import { SnippetComponent } from './common/snippet/snippet.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'solution', component: SolutionComponent },
  { path: 'plan', component: PlanComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'product', component: ProductComponent },
  { path: 'features', component: FeaturesComponent },
  { path: 'find-us', component: FindUsComponent },
  { path: 'games', component: GamesComponent },
  { path: 'z-survival', component: ZSurvivalComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'start-menu', component: StartMenuComponent },
      { path: 'open-tale', component: OpenTaleComponent },
      { path: 'character-create', component: CharacterCreateComponent },
      { path: 'main',  component: ZMainComponent,
        children: [
          { path: '', component: ZHideComponent },
          { path: 'hide', component: ZHideComponent },
          { path: 'map', component: ZMapComponent },
          { path: 'me', component: ZMeComponent },

        ]
      },
      { path: 'home',  component: HomeComponent },
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    PageNotFoundComponent,
    HeaderComponent,
    RegisterComponent,
    MenuItemComponent,
    GamesComponent,
    GamesComponent,
    ZSurvivalComponent,
    ZMainComponent,
    ZBottomMenuComponent,
    ZBottomMenuItemComponent,
    ZHideComponent,
    ZMainHeaderComponent,
    SelfieComponent,
    HeaderUserStatusComponent,
    OpenTaleComponent,
    CharacterCreateComponent,
    StartMenuComponent,
    ZConfirmPanelComponent,
    CharacterSelectComponent,
    LoadingComponent,
    InputDebounceComponent,
    ZMeComponent,
    ZSubHeaderComponent,
    ZMeStatusComponent,
    ZMeSkillComponent,
    ZMeTalentComponent,
    ZMeEquipmentComponent,
    ZMeInventoryComponent,
    ZMapComponent,
    TechListPanelComponent,
    TechItemComponent,
    AdvertiseItemComponent,
    FlashItemComponent,
    SolutionComponent,
    PlanComponent,
    SpecComponent,
    SelectArrayComponent,
    FooterComponent,
    PlanItemComponent,
    PlanItemListComponent,
    ProductComponent,
    MapChartComponent,
    ProductListComponent,
    ProductListItemComponent,
    ThreedDemoComponent,
    ThreeDCanvasComponent,
    BarChartComponent,
    D3ChartsDemoComponent,
    GalleryComponent,
    GalleryListComponent,
    GalleryShowComponent,
    GalleryMapComponent,
    GalleryListItemComponent,
    CarouselComponent,
    CarouselImageComponent,
    CarouselThumbNailListComponent,
    CarouselThumbNailComponent,
    CarouselImageListComponent,
    FindUsComponent,
    FeaturesComponent,
    SnippetComponent
  ],
  imports: [
    AlertModule,
    CarouselModule,
    AccordionModule,
    TabsModule,
    DropdownModule,
    ProgressbarModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    MainPipe
  ],
  providers: [HttpService, AuthService, ValueService, TokenService, CookieService, DeviceService, MenuService, GeoService, SelectArrayService, GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
