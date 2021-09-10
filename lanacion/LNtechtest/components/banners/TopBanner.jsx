export default function TopBanner () {
  const containerStyles = {
    width: '100% !important',
    backgroundColor: '#f3f3f3',
    marginBottom: 40,
  };
  const bannerStyles = {
    width: 1260,
    height: 170,
    background: '#a0dbe9',
    margin: 'auto',
  };
  return(<div id="top-banner-container" style={containerStyles}>
    <div id="top-banner" style={bannerStyles}></div>
  </div>);
}