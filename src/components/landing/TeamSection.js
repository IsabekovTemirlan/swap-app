import Title from 'components/landing/Title';
import TeamCard from 'components/landing/TeamCard';
import Image1 from 'assets/img/team-1-800x800.jpg';
import Image2 from 'assets/img/team-2-800x800.jpg';
import Image3 from 'assets/img/team-3-800x800.jpg';
import Image4 from 'assets/img/team-4-470x470.png';

export default function TeamSection() {
    return (
        <section className="pt-10 pb-20">
            <div className="container max-w-7xl mx-auto px-4">
                <Title heading="Последние вещи" />
                <div className="flex flex-wrap">
                    <TeamCard
                        img={Image1}
                        name="Утюг"
                        position="Web Developer"
                    />
                    <TeamCard
                        img={Image2}
                        name="Книга"
                        position="Marketing Specialist"
                    />
                    <TeamCard
                        img={Image3}
                        name="Очки"
                        position="UI/UX Designer"
                    />
                    <TeamCard
                        img={Image4}
                        name="Краска"
                        position="Founder and CEO"
                    />
                        <TeamCard
                        img={Image2}
                        name="Книга"
                        position="Marketing Specialist"
                    />
                      <TeamCard
                        img={Image1}
                        name="Утюг"
                        position="Web Developer"
                    />
                      <TeamCard
                        img={Image4}
                        name="Краска"
                        position="Founder and CEO"
                    />
                         <TeamCard
                        img={Image3}
                        name="Очки"
                        position="UI/UX Designer"
                    />
                </div>
            </div>
        </section>
    );
}
