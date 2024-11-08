import { DappPage } from '.';
import { Footer } from '../global/footer';
import { Header } from '../global/header';

export interface IHomePageProps {
  readonly headerData: Header;
  readonly footerData: Footer;
  readonly pageData?: DappPage;
}
