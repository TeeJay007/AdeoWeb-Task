import Header from './Components/Header'
import Card from './Components/Card'
import ImageCard from './Components/ImageCard'
import Weather from './Components/Weather'
import ImgCard from './Components/ImgCard'
import Form from './Components/Form'
import Button from './Components/Button'
import Heading from './Components/Heading'
import Footer from './Components/Footer'

function App() {
  const topLinks = [
      { name: 'Menu', url: '#' },
      { name: 'Some text', url: '#' },
      { name: 'Another item', url: '#' },
      { name: 'One more', url: '#' },
      { name: 'And last one', url: '#' }
  ]

  const mainLinks = [
      { name: 'Home', url: '#' },
      { name: 'Service', url: '#' },
      {
          name: 'Works',
          links: [
              { name: 'All', url: '#' },
              { name: 'Graphic', url: '#' },
              { name: 'Design', url: '#' },
              { name: 'Logo', url: '#' },
              { name: 'Website', url: '#' }
          ]
      },
      { name: 'About me', url: '#' },
      { name: 'Contact', url: '#' }
  ]

  return (
    <div>
      <Header mainLinks={mainLinks} topLinks={topLinks} />
      <main className="container md-flex p-y-1 space-2">
        <Card className="primary flex-1 flex flex-col justify-between m-x-1-5">
          <div>
            <Heading>Welcome</Heading>
            Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed
            do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis
            nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea
            commodo consequat.
          </div>
          <div className="flex items-right p-t-1-5">
            <Button>Learn More</Button>
          </div>
        </Card>
        <ImageCard className="md-w-66" title='Ui/Ux Design' img='alexandra-gorn-VBo24-Ys6gQ.jpg'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          <br /><br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
          incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
          nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </ImageCard>
      </main>
      <section className="container">
        <Card className="p-b-0" title='Products' subtitle="Offers today">
          <div className="md-flex md-space-x-1">
            <Weather className="flex-1 p-b-1 md-p-b-0" />
            <div className="flex-1 flex flex-col space-y-1">
              <ImgCard className="flex-1" title='The Best Coffee' img='/bruno-cervera-YH7mGnigHRs.jpg' />
              <ImgCard className="flex-1" title='Top 100 Books' img='vandan-patel-vfiuGpL9fiU.jpg' />
            </div>
          </div>
        </Card>
      </section>
      <section className="container">
        <Card title='Contact'>
          <div className="md-flex flex-row md-space-x-1 space-y-1">
            <div className="flex-1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
              <br /><br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
              ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </div>
            <div className="md-w-25">
              <Form />
            </div>
          </div>
        </Card>
      </section>
      <Footer mainLinks={mainLinks} />
    </div>
  );
}

export default App;
