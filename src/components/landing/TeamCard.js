import Image from '@material-tailwind/react/Image';
import H6 from '@material-tailwind/react/Heading6';
import Paragraph from '@material-tailwind/react/Paragraph';
import Button from '@material-tailwind/react/Button';
import Icon from '@material-tailwind/react/Icon';

export default function LandingTeamCard({ img, name, position }) {
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mt-6 px-4">
            <div className="px-6">
                <Image src={img} alt={name} raised />
                <div className="pt-2 text-center">
                    <div className="flex items-center justify-between"><H6 color="gray">{name}</H6> <span> 12  <Icon family="font-awesome" color="red" name="fas fa-heart" size="sm" /></span></div>
                    <div className="flex items-center justify-between">
                        <Button
                            color="red"
                            buttonType="btn"
                            className="mr-1"
                            ripple="dark"
rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fas fa-heart"
                                size="lg"
                            />
                        </Button>

                        <Button
                            color="green"
                            buttonType="btn"
                            className="mr-1"
                            ripple="dark"
rounded
                            iconOnly
                        >
                            <Icon
                                family="font-awesome"
                                name="fas fa-pen"
                                size="lg"
                            />
                        </Button>
                        <Button className="" rounded      roundedcolor="lightBlue" ripple="light">
                             Обменяться
                         </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}
