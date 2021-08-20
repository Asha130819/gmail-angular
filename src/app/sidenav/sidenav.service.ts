import { Injectable, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { CardContent } from "./sidenav.model";


@Injectable({providedIn: "root"})
export class SidenavService{
  key= new BehaviorSubject<string>(<any>null);

  public primary: CardContent[] = [
    new CardContent('95,2,6, 03:24:00',"Javascript new courses available now!",'Udemy'),
    new CardContent('54, 7, 23, 21:07:00',"Shop up to 50% off",'Amazon'),
    new CardContent('July 20, 2016 15:00:00',"New Deals, New Discounts🛒",'Flipkart'),
    new CardContent('july 09, 2017, 08:45:00',"Get your hands-on on-demand courses",'Pluralsight'),
    new CardContent('54, 7, 23, 21:07:00',"Born for that next-level👟",'Puma'),
    new CardContent('04, 10, 03, 14:44:00',"Apply to jobs at iPower Technologies Pvt.Ltd",'Indeed'),
    new CardContent('june 09, 2020, 18:35:20',"Ready for the safest trip ever? Book now 👆",'redBus'),
  ]
    

  public social: CardContent[] = [
    new CardContent('95,2,6, 03:24:00',"Javascript new courses available now!",'Udemy'),
    new CardContent('54, 7, 23, 21:07:00',"Shop up to 50% off",'Amazon'),
    new CardContent('July 20, 2016 15:00:00',"New Deals, New Discounts🛒",'Flipkart'),
    new CardContent('july 09, 2017, 08:45:00',"Get your hands-on on-demand courses",'Pluralsight'),
    new CardContent('54, 7, 23, 21:07:00',"Born for that next-level👟",'Puma'),
    new CardContent('04, 10, 03, 14:44:00',"Apply to jobs at iPower Technologies Pvt.Ltd",'Indeed'),
    new CardContent('june 09, 2020, 18:35:20',"Ready for the safest trip ever? Book now 👆",'redBus'),
  ]

  public promotion: CardContent[] = [
    new CardContent('95,2,6, 03:24:00',"Javascript new courses available now!",'Udemy'),
    new CardContent('54, 7, 23, 21:07:00',"Shop up to 50% off",'Amazon'),
    new CardContent('July 20, 2016 15:00:00',"New Deals, New Discounts🛒",'Flipkart'),
    new CardContent('july 09, 2017, 08:45:00',"Get your hands-on on-demand courses",'Pluralsight'),
    new CardContent('54, 7, 23, 21:07:00',"Born for that next-level👟",'Puma'),
    new CardContent('04, 10, 03, 14:44:00',"Apply to jobs at iPower Technologies Pvt.Ltd",'Indeed'),
    new CardContent('june 09, 2020, 18:35:20',"Ready for the safest trip ever? Book now 👆",'redBus'),
  ]

  getKey(data: string){
    this.key.next(data);
  }
}