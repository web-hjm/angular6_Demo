import { Component, ElementRef, ViewChild, OnInit} from '@angular/core';
import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface Nav {
  name: string,
  id: number
}
@Component({
  selector: 'app-my-nav',
  templateUrl: './my-nav.component.html',
  styleUrls: ['./my-nav.component.css']
})
export class MyNavComponent implements OnInit{
    public nav: Nav[] = [{name: '导航1', id: 1},{name: '导航1', id: 56},{name: '导航1', id: 34},{name: '导航1', id:65}]
    @ViewChild('id') $id:ElementRef;
    @ViewChild('name') $name:ElementRef;
    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
      .pipe(
        map(result => result.matches)
      );
    constructor(private breakpointObserver: BreakpointObserver) {}
    ngOnInit () {

    }
    listClick(obj:Nav):void {
        this.$id.nativeElement.value = obj.id;
        this.$name.nativeElement.value = obj.name;
    }
  }
