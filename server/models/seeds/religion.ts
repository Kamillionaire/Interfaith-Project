import {Religion} from './../Religions';
namespace seeds {
  export class ReligionsSeeds {
    public seeds;
    constructor () {
      this.seeds = [
        {name: 'Bahai', historicOrigin: 'Iran', emblem: 'client/assets/bahai.jpeg',
        description: `All human beings have a soul that lives for ever. All human beings are members of a single race,
        which should soon be united in a single global community. All human beings are different, but equal;
        there should be no inequality between races or sexes. All religions have the same spiritual foundation,
        despite their apparent differences.`},
        {name: 'Buddhism', historicOrigin: 'Present Day Nepal', emblem: 'client/assets/BuddhistChaplain.jpg',
        description: `Buddhism is a spiritual tradition that focuses on personal spiritual development and the
        attainment of a deep insight into the true nature of life. There are 376 million followers worldwide.
        Buddhists seek to reach a state of nirvana, following the path of the Buddha, Siddhartha Gautama,
        who went on a quest for Enlightenment around the sixth century BC.`},
        {name: 'Christianity', historicOrigin: 'Present Day Palestine', emblem: 'client/assets/christianity.png',
        description: `With over 2 billion adherents worldwide, Christianity is the largest religion in the world.
        It has dominated western culture for centuries and remains the majority religion of Europe and the Americas.
        Christian beliefs center on the life of Jesus of Nazareth, a teacher and healer who lived in first century
        Palestine. The primary source of information about the life of Jesus are the Gospels, which were written
        sometime between 20 and 100 years after his death and became the first four books of the New Testament.
        The Gospels describe a three-year teaching and healing ministry during which Jesus attracted 12 close disciples
        and other followers who believed him to be the Messiah (Christos).`},
        {name: 'Hinduism', historicOrigin: 'Modern Day Pakistan', emblem: 'client/assets/hinduism.jpeg',
        description: `In some ways Hinduism is the oldest living religion in the world, or at least elements within it
        stretch back many thousands of years. Yet Hinduism resists easy definition partly because of the vast array of
        practices and beliefs found within it. It is also closely associated conceptually and historically with the
        other Indian religions Jainism, Buddhism and Sikhism.`},
        {name: 'Islam', historicOrigin: 'Modern Day Saudi Arabia', emblem: 'client/assets/islam.png',
        description: `Islam is one of the largest religions in the world, with over 1 billion followers.
        It is a monotheistic faith based on revelations received by the Prophet Muhammad in 7th-century
        Saudi Arabia. The Arabic word islam means “submission,” reflecting the faith's central tenet of submitting
        to the will of God. Followers of Islam are called Muslims.
        According to Islamic tradition, the angel Gabriel appeared to the Prophet over the course of 20 years,
        revealing to him many messages from God. Muslims recognize some earlier Judeo-Christian prophets—including
        Moses and Jesus—as messengers of of the same true God. But in Islam, but Muhammad is the last and greatest of
        the prophets, whose revelations alone are pure and uncorrupted.`},
        {name: 'Jainism', historicOrigin: 'India', emblem: 'client/assets/jainism.png',
        description: `Jainism is an ancient religion from India that teaches that the way to liberation and bliss
        is to live lives of harmlessness and renunciation. The essence of Jainism is concern for the welfare of every
        being in the universe and for the health of the universe itself.`},
        {name: 'Judaism', historicOrigin: 'Modern Day Israel', emblem: 'client/assets/judaism .htm',
        description: `The central religious belief of Judaism is that there is only one God. Monotheism
        was uncommon at the time Judaism was born, but according to Jewish tradition, God himself revealed
        it to Abraham, the ancestor of the Jewish people. Judaism teaches that God took special care of the
        Hebrews (who would later become the Jews). After rescuing them from slavery in Egypt, God revealed
        the Ten Commandments to Moses, and many more religious and ethical guidelines in the Torah ("the Law").
        Many of the guidelines (mitzvah) emphasized ritual purity and the importance of remaining set apart from
        the surrounding polytheistic cultures.`},
        {name: 'Shinto', historicOrigin: 'Japan', emblem: 'client/assets/shintoism.png',
        description: `The essence of Shinto is the Japanese devotion to invisible spiritual beings and powers called
        kami, to shrines, and to various rituals. Shinto is not a way of explaining the world. What matters are rituals
        that enable human beings to communicate with kami. Kami are not God or gods. They are spirits that are
        concerned with human beings - they appreciate our interest in them and want us to be happy - and if they are
        treated properly they will intervene in our lives to bring benefits like health, business success, and good
        exam results.`},
        {name: 'Sikhism', historicOrigin: 'Present Day India', emblem: 'client/assets/sikhism.png',
        description: `Sikhism was founded in the 16th century in the Punjab district of what is now India and Pakistan.
        It was founded by Guru Nanak and is based on his teachings, and those of the 9 Sikh gurus who followed him.
        The most important thing in Sikhism is the internal religious state of the individual.`},
        {name: 'Taoism', historicOrigin: 'China', emblem: 'client/assets/taoism.jpeg',
        description: `Taoism emphasizes spiritual harmony within the individual, complementing Confucianism's
        focus on social duty. The two great Chinese belief systems were founded at about the same time and continue
        to exist side-by-side in today's China. There are two main schools within Taoism, usually called
        "philosophical Taoism" (Tao-chia) and "religious Taoism" (Tao-chaio). The two are not as strongly distinguished
        as once thought, but philosophical Taoism tends to focus on the philosophical writings of Lao-Tzu, Chuang-Tzu
        and other early mystics while religious Taoism emphasizes religious rituals aimed at attaining immortality.`},
        {name: 'Seeker', historicOrigin: 'That depends...', emblem: 'client/assets/seeker.png',
        description: `Seeking truth through education.`},
        {name: 'Other', historicOrigin: 'You', emblem: 'client/assets/other.png',
        description: `Your personal beliefes on religion.`},
      ];

    }
    public randomHex() {
      return Math.floor(Math.random() * 16777215).toString(16);
    }

    public createSeeds() {
      this.seeds.forEach((v) => {
        Religion.create(v, (e) => {
          if (e) throw new Error(e);

        });
      });
    }
  }
}

export const ReligionsSeeds = seeds.ReligionsSeeds;
