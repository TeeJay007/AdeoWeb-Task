import Heading from "../Components/Heading"
import Button from "../Components/Button"

const Contact = ({history}) => {
    return (
        <section className="container-1-5">
            <div className="flex flex-row justify-between">
                <Heading>Contact</Heading>
                <div>
                    {history.action !== 'POP' && <Button onClick={history.goBack}>&#x2B05; Back</Button>}
                </div>
            </div>
            <div>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purus
                    faucibus ornare suspendisse sed nisi lacus sed viverra. Nisi est sit amet facilisis magna etiam. Sit amet nisl purus in mollis nunc sed id semper.
                    Cursus metus aliquam eleifend mi in nulla. Augue lacus viverra vitae congue eu. Amet luctus venenatis lectus magna fringilla. Sodales ut etiam
                    sit amet nisl purus in mollis. Quam id leo in vitae. Laoreet id donec ultrices tincidunt. Nam libero justo laoreet sit amet cursus sit. Consequat
                    interdum varius sit amet mattis vulputate. Justo eget magna fermentum iaculis. Sit amet nisl purus in mollis nunc sed. Ornare lectus sit amet est
                    placerat in egestas. Ut diam quam nulla porttitor massa id neque aliquam. Et tortor consequat id porta nibh venenatis cras sed felis. Habitasse
                    platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. At volutpat diam ut venenatis tellus in metus. A condimentum
                    vitae sapien pellentesque habitant morbi.
                </p>
                <p>
                    Blandit libero volutpat sed cras ornare arcu dui vivamus. Leo urna molestie at elementum eu facilisis sed odio. Lacinia at quis risus sed. Id
                    aliquet risus feugiat in ante. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Tortor aliquam nulla facilisi cras
                    fermentum odio eu feugiat pretium. Ultricies leo integer malesuada nunc. Justo nec ultrices dui sapien eget. Velit sed ullamcorper morbi
                    tincidunt ornare massa. Leo in vitae turpis massa. Suspendisse in est ante in nibh mauris cursus mattis. Mi proin sed libero enim sed.
                </p>
                <p>
                    Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Pellentesque elit
                    eget gravida cum sociis natoque penatibus. Sit amet aliquam id diam maecenas ultricies. Cras sed felis eget velit aliquet sagittis id. Leo in vitae
                    turpis massa sed. Aliquam etiam erat velit scelerisque in dictum. Purus sit amet volutpat consequat mauris nunc congue nisi. Egestas dui id
                    ornare arcu odio ut. Nisi porta lorem mollis aliquam. In cursus turpis massa tincidunt dui ut ornare lectus sit. Neque aliquam vestibulum morbi
                    blandit cursus risus at ultrices mi. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Vitae justo eget magna
                    fermentum iaculis eu non. Nascetur ridiculus mus mauris vitae ultricies leo. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae.
                    Consequat ac felis donec et odio pellentesque diam volutpat commodo. Tortor posuere ac ut consequat.
                </p>
                <p>
                    Orci porta non pulvinar neque laoreet suspendisse interdum. Nunc scelerisque viverra mauris in aliquam sem. Sit amet facilisis magna etiam
                    tempor orci eu lobortis. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Purus in mollis nunc sed id semper
                    risus in hendrerit. Ac tortor vitae purus faucibus. Felis bibendum ut tristique et egestas quis ipsum. Erat pellentesque adipiscing commodo elit at
                    imperdiet dui accumsan sit. Nec dui nunc mattis enim ut. Eget magna fermentum iaculis eu non. Mi bibendum neque egestas congue quisque
                    egestas diam. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Varius duis at consectetur lorem donec massa sapien. Mattis enim
                    ut tellus elementum sagittis vitae et leo duis. Pulvinar proin gravida hendrerit lectus. Massa eget egestas purus viverra accumsan in nisl nisi.
                </p>
                <p>
                    Sodales ut etiam sit amet. Sagittis id consectetur purus ut. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Sodales ut etiam
                    sit amet nisl purus in mollis. Diam maecenas ultricies mi eget mauris. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper
                    dignissim cras. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Ipsum dolor sit amet consectetur. Adipiscing diam donec
                    adipiscing tristique risus nec feugiat in. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Platea dictumst vestibulum rhoncus est
                    pellentesque elit ullamcorper dignissim cras. Mauris cursus mattis molestie a iaculis at.
                </p>
            </div>
        </section>
    )
}

export default Contact