import { TestBed, inject } from '@angular/core/testing';

import { RomainNumeralsService } from './romain-numerals.service';

describe('RomainNumeralsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RomainNumeralsService]
    });
  });

  it('should be created', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service).toBeTruthy();
  }));
  
  it('1=I', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(1)).toBe('I');
  }));
  it('2=II', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(2)).toBe('II');
  }));
  it('3=III', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(3)).toBe('III');
  }));
  it('4=IV', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(4)).toBe('IV');
  }));
  it('5=V', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(5)).toBe('V');
  }));
  it('6=VI', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(6)).toBe('VI');
  }));
  it('7=VII', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(7)).toBe('VII');
  }));
  it('8=VIII', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(8)).toBe('VIII');
  }));
  it('9=IX', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(9)).toBe('IX');
  }));
  it('10=X', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(10)).toBe('X');
  }));
  it('20=XX', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(20)).toBe('XX');
  }));
  it('30=XXX', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(30)).toBe('XXX');
  }));
  it('40=XL', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(40)).toBe('XL');
  }));
  it('50=L', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(50)).toBe('L');
  }));
  it('60=LX', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(60)).toBe('LX');
  }));
  it('70=LXX', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(70)).toBe('LXX');
  }));
  it('80=LXXX', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(80)).toBe('LXXX');
  }));
  it('90=XC', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(90)).toBe('XC');
  }));

  it('100=C', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(100)).toBe('C');
  }));
  it('200=CC', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(200)).toBe('CC');
  }));
  it('300=CCC', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(300)).toBe('CCC');
  }));
  it('400=CD', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(400)).toBe('CD');
  }));
  it('500=D', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(500)).toBe('D');
  }));
  it('600=DC', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(600)).toBe('DC');
  }));
  it('700=DCC', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(700)).toBe('DCC');
  }));
  it('800=DCCC', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(800)).toBe('DCCC');
  }));
  it('900=CM', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(900)).toBe('CM');
  }));
  it('1000=M', inject([RomainNumeralsService], (service: RomainNumeralsService) => {
    expect(service.ArabictoRoman(1000)).toBe('M');
  }));
  


});