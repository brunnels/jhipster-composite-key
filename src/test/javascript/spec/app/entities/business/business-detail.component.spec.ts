/* tslint:disable max-line-length */
import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { JhipsterTestModule } from '../../../test.module';
import { BusinessDetailComponent } from '../../../../../../main/webapp/app/entities/business/business-detail.component';
import { BusinessService } from '../../../../../../main/webapp/app/entities/business/business.service';
import { Business } from '../../../../../../main/webapp/app/entities/business/business.model';

describe('Component Tests', () => {

    describe('Business Management Detail Component', () => {
        let comp: BusinessDetailComponent;
        let fixture: ComponentFixture<BusinessDetailComponent>;
        let service: BusinessService;

        beforeEach(async(() => {
            TestBed.configureTestingModule({
                imports: [JhipsterTestModule],
                declarations: [BusinessDetailComponent],
                providers: [
                    BusinessService
                ]
            })
            .overrideTemplate(BusinessDetailComponent, '')
            .compileComponents();
        }));

        beforeEach(() => {
            fixture = TestBed.createComponent(BusinessDetailComponent);
            comp = fixture.componentInstance;
            service = fixture.debugElement.injector.get(BusinessService);
        });

        describe('OnInit', () => {
            it('Should call load all on init', () => {
                // GIVEN

                spyOn(service, 'find').and.returnValue(Observable.of(new HttpResponse({
                    body: new Business(123)
                })));

                // WHEN
                comp.ngOnInit();

                // THEN
                expect(service.find).toHaveBeenCalledWith(123);
                expect(comp.business).toEqual(jasmine.objectContaining({id: 123}));
            });
        });
    });

});
