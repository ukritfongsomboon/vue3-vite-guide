import { loginModel } from '@/models/loginModels'

// NOTE สร้าง Function สำหรับ SignIn โดยจะมี Parameter เป็น Type "loginModel"
// NOTE และจะ Return เป็น Type "Booleen"
function SignIn(payload: loginModel): boolean {
    if (payload.username == 'admin' && payload.password == '1234') return true
    else return false
}

export { SignIn }

interface Plans {
    name: string;
    freeMinutes: number;
    exceededMinutePercentTax: number;
  }

  interface Taxes {
    sourceRegion: string;
    destinRegion: string;
    costPerMinute: number;
  }

  export default interface PlansRepository {
    getPlanByName(name: string): Promise<Plans>;
    getAllPlans(): Promise<Plans[]>;
  }


  export default interface TaxesRepository {
    getTaxByRegions(regionA: string, regionB: string): Promise<Taxes>;
    getAllTaxes(): Promise<Taxes[]>;
  }