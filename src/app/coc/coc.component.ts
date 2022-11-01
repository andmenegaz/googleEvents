import { SiteConfigService } from './../admin/shared/site-config/site-config.service';
import { SiteConfig } from './../admin/shared/site-config/site-config';
import { Component, OnInit } from '@angular/core';
import { AngularFireObject } from '@angular/fire/database';

@Component({
  selector: 'app-coc',
  templateUrl: './coc.component.html',
  styleUrls: ['./coc.component.scss']
})
export class CocComponent implements OnInit {
  siteConfig: AngularFireObject<SiteConfig>;

  constructor(
    private siteConfigService: SiteConfigService
  ) { }

  ngOnInit() {
    this.siteConfig = this.siteConfigService.getConfig();
  }

}
