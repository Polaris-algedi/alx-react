import { getFullYear, getFooterCopy } from "../utils/utils";
import "./Footer.css";

export default function Footer() {
    return (
      <div className="App-footer" data-testid="footer">
        <p data-testid="footer-text">
          Copyright {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    );
  }