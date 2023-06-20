import googleLogo from '../assets/img/google.png'
import slackLogo from '../assets/img/slack.png'
import atlassianLogo from '../assets/img/atlassian.png'
import dropBoxLogo from '../assets/img/dropbox.png'
import shopifyLogo from '../assets/img/shopify.png'

const Brand = () => {
  return (
    <div className="w-full p-10 flex items-center justify-center flex-wrap gap-5 ">
      <img src={googleLogo} />
      <img src={slackLogo} />
      <img src={atlassianLogo} />
      <img src={dropBoxLogo} />
      <img src={shopifyLogo} />
    </div>
  );
}

export default Brand;