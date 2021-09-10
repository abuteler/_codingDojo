export function LogoLaNacion () {
  const styles = {
    height: 31,
  };
  return (<img src='/media/La_Nacion_Logo.png' alt='La Nacion' style={styles} />)
}

export default function Header () {
  const headerStyles = {
    display: 'block',
    background: 'white',
    paddingTop: 15,
    paddingBottom: 15,
    position: 'fixed',
    top: 0,
    width: '100%',
    borderBottom: '1px solid rgb(204, 204, 204)',
    textAlign: 'center',
  };

  return (<header style={headerStyles}>
    <LogoLaNacion />
  </header>);
}