const StoryContent = `
    <div id="ChoiceStory">
        <div id="ChoiceStoryUp">
            <p id="MainStory">Archon Quest</p>
            <p id="SideStory">World Quest</p> 
            <p id="LegendStory">Story Quest</p>
            <p id="InvitationStory">Hangout Event</p>
        </div>   
        <div id="ChoiceStoryDown">
            <p>Please select the story you want to read above.</p>
        </div> 
    </div>
`;

const MainStoryOption = `
    <div id="MChapterDown">
        <div id="MChapterLeft">
            <select id="MChapter">
                <option value="Plot1">Campaign</option>
                <option value="Setup1">Setting and characters</option>
                <option value="Mondstadt1">Mondstadt</option>
                <option value="Liyue1">Liyue</option>
                <option value="Inazuma1">Inazuma</option>
                <option value="Sumeru1">Sumeru</option>
                <option value="Fontaine1">Fontaine</option>
            </select>
        </div>
        <div id="MChapterRight">
        <h3>Synopsis</h3>
            <p>"Sora" and "Ying" are travelers who travel together in the sea of stars. After arriving in Teyvat, they witnessed the demise of Kanrea. When they decided to leave Teyvat, they were blocked and sealed by the "Maintainer of Heaven's Law", and thus the twins were separated. One of them (the character played by the player, usually directly referred to as "Traveler") woke up after sleeping for 500 years, and in order to find his blood relatives, he embarked on a journey around the seven countries of Teyvat.</p>
        </div>
    </div>
`;

const SideStoryOption = `
    <div id="SChapterDown">
        <div id="SChapterLeft">
            <select id="SChapter">
                <option value="Mondstadt2">Mondstadt</option>
                <option value="Liyue2">Liyue</option>
                <option value="Inazuma2">Inazuma</option>
                <option value="Sumeru2">Sumeru</option>
                <option value="Fontaine2">Fontaine</option>
            </select>
        </div>
        <div id="SChapterRight">
            <h3>Mondstadt</h3>
            <p>1.Flighty Flora... and Flora</p>
            <p>2.Mondstadt and Its Archon</p>
            <p>3.Windrise, Windfall</p>
            <p>4.Question and Answer</p>
            <p>5.Equivalent Exchange</p>
            <p>6.Lingering Malady</p>
            <p>7.Thief-Catcher</p>
            <p>8.After the Storm</p>
            <p>9.Cleanup At Dawn</p>
            <p>10.In the Aftermath</p>
            <p>11.Break the Sword Cemetery Seal</p>
            <p>12.Time and Wind</p>
            <p>13.In the Mountains</p>
            <p>14.The Festering Fang</p>
            <p>15.The Great Mountain Survey</p>
            <p>16.The Great Mountain Survey Ⅱ</p>
            <p>17.Ah, Fresh Meat!</p>
            <p>18.A Land Entombed</p>
            <p>19.Lost in the Snow</p>
        </div>
    </div>
`;

const LegendStoryOption = `
    <div id="LChapterDown">
        <div id="LChapterLeft">
            <select id="LChapter">
                <option value="Mondstadt3">Mondstadt 5-Star Characters</option>
                <option value="Liyue3">Liyue 5-Star Characters</option>
                <option value="Inazuma3">Inazuma 5-Star Characters</option>
                <option value="Sumeru3">Sumeru 5-Star Characters</option>
                <option value="Fontaine3">Fontaine 5-Star Characters</option>
            </select>
        </div>
        <div id="LChapterRight">
            <h3>Mondstadt 5-Star Characters</h3>
            <p>Pyro：Diluc Noctua Chapter</p>
            <p>Pyro：Klee Trifolium Chapter</p>
            <p>Anemo：Jean Leo Minor Chapter</p>
            <p>Anemo：Venti Carmen Dei Chapter</p>
            <p>Hydro：Mona Astrolabos Chapter</p>
            <p>Geo：Albedo Princeps Cretaceus Chapter</p>
            <p>Cryo：Eula Aphros Delos Chapter</p>
        </div>
    </div>
`;

const InvitationStoryOption = `
    <div id="IChapterDown">
        <div id="IChapterLeft">
            <select id="IChapter">
                <option value="Mondstadt4">Mondstadt 4-Star Characters</option>
                <option value="Liyue4">Liyue 4-Star Characters</option>
                <option value="Inazuma4">Inazuma 4-Star Characters</option>
                <option value="Sumeru4">Sumeru 4-Star Characters</option>
                <option value="Fontaine4">Fontaine 4-Star Characters</option>
            </select>
        </div>
        <div id="IChapterRight">
            <h3>Mondstadt 4-Star Characters</h3>
            <p>Pyro：Bennett Fantastic Voyage</p>
            <p>Hydro：Barbara Wellspring of Healing</p>
            <p>Geo：Noelle Chivalric Training</p>
            <p>Cryo：Diona The Cat and the Cocktail</p>
            <p>Cryo：Kaeya Shenanigans and Sweet Wine</p>
        </div>
    </div>
`;

const LotteryContent = `
    <div id="LChapterDown">
        <table id="CardPool">
            <tr id="Version">
                <td>Version</td>
                <td>Wishes</td>
            </tr>
            <tr>
                <td>
                    <select id="selection" onchange="showSelectedImage()">
                        <option value="images/10up.png">1.0</option>
                        <option value="images/11up.png">1.1</option>
                        <option value="images/12up.png">1.2</option>
                        <option value="images/13up.png">1.3</option>
                        <option value="images/14up.jpeg">1.4</option>
                        <option value="images/15up.png">1.5</option>
                        <option value="images/16up.png">1.6</option>
                        <option value="images/20up.png">2.0</option>
                        <option value="images/21up.png">2.1</option>
                        <option value="images/22up.png">2.2</option>
                    </select>
                </td>
                <td id="tablerightdown"><img id="selectedImage" class="selectedImage" src="images/10up.png" alt="Selected Image"></td>
            </tr>
        </table>
    </div>
`;

const MapContent = `
    <div class="MChapterDown">
        <img id="selectedImage2" class="selectedImage" src="images/map.png" alt="Selected Image">
        <div id="areaText">
            <div id="areaText1" class="imageText"></div>
            <div id="areaText2" class="imageText"></div>
            <div id="areaText3" class="imageText"></div>
            <div id="areaText4" class="imageText"></div>
            <div id="areaText5" class="imageText"></div>
        </div>
    </div>
`;

const RoleContent = `
    <div id="RoleCardDown">
        <div id="RoleNameText">
            <div id="RoleNameText1" class="RoleNameText"></div>
            <div id="RoleNameText2" class="RoleNameText"></div>
            <div id="RoleNameText3" class="RoleNameText"></div>
            <div id="RoleNameText4" class="RoleNameText"></div>
            <div id="RoleNameText5" class="RoleNameText"></div>
            <div id="RoleNameText6" class="RoleNameText"></div>
        </div>
        <div id="Image">
            <img id="Kokomi" src="images/珊瑚宮心海.png">
            <img id="Hutao" src="images/胡桃.png">
            <img id="Alhaitham" src="images/艾爾海森.png">
            <img id="Neuvillette" src="images/那維萊特.jpg">
            <img id="Klee" src="images/可莉.png">
            <img id="Shenhe" src="images/申鶴.jpg">
        </div>
    </div>
`;

const articles1 = {
    Plot1: ` 
        <h3>Synopsis</h3>
        <p>"Sora" and "Ying" are travelers who travel together in the sea of stars. After arriving in Teyvat, they witnessed the demise of Kanrea. When they decided to leave Teyvat, they were blocked and sealed by the "Maintainer of Heaven's Law", and thus the twins were separated. One of them (the character played by the player, usually directly referred to as "Traveler") woke up after sleeping for 500 years, and in order to find his blood relatives, he embarked on a journey around the seven countries of Teyvat.</p>
    `,
    Setup1: `
        <h3>Setting and characters</h3>
        <p>Genshin Impact takes place in the world of Teyvat, composed of seven major nations, each of which is ruled by a different god called an "Archon", tied to a different element and ideal, and governed by a specific faction. The mysterious floating island of Celestia hangs above Teyvat, allegedly home to gods, as well as mortals who have ascended to godhood through great, heroic feats. Underground lie the ruins of Khaenri'ah, a mysterious nation which was destroyed by Celestia 500 years before the main events of the game. Unlike the seven nations, Khaenri'ah was not ruled over by a god, and sought to create a civilization led solely by humans.</p>
        <p>Irrespective of which nation they hail from, individuals who have great ambitions may be granted a Vision, a magical gemstone that allows them to control a specific element and gives them the potential to ascend to godhood and reside in Celestia. Others may achieve elemental manipulation through Delusions, artificial Visions made from the remains of powerful gods which allow their bearers to control elements by feeding off their vitality. Archons, on the other hand, possess a Gnosis, which is a device similar to a Vision that affirms their authority as an Archon and allows them to "resonate" with Celestia</p>
        <p>The protagonists are the Traveler and Paimon, the Traveler's guide and companion. The Traveler and their twin sibling travel across worlds in the universe before being separated in Teyvat, forcing the Traveler to go on a journey to find them. The player may choose to play as either Aether (the brother) or Lumine (the sister), though their account username is used throughout most of the game.</p>
        <p>The primary antagonists in the game are the Abyss Order, a legion of monsters made up of corrupted Khaenri'ahns who seek to overthrow the rule of the Archons, and the Fatui, a military force and delegation of diplomats from Snezhnaya who pursue an aggressive foreign policy throughout Teyvat. The Traveler's lost twin is respected as the leader of the Abyss Order, while the Fatui are led by the Eleven Harbingers, the powerful lieutenants of the Tsaritsa who have been given special authority to carry out her will. Some Harbingers take a moderate diplomatic stance, while others are hardliners in their dealings with other nations.</p>
    `,
    Mondstadt1: ` 
        <h3>Mondstadt The Outlander Who Caught the Wind</h3>
        <p>Aether and Lumine, a pair of twins who travel across different worlds, land in Teyvat. Witnessing the destruction of Khaenri'ah upon their arrival, the two attempt to flee, but they soon find their path blocked by a mysterious god who calls herself the "Sustainer of Heavenly Principles". She separates the twins, sealing the playable character away for five hundred years. When the sealed sibling, now called "The Traveler", wakes up, they meet a small fairy-like being named Paimon, who becomes their companion and travel guide. The two set off on a journey across Teyvat to gather information about their lost twin from each nation's ruling Archon.The Traveler and Paimon arrive in Mondstadt, only to find it being terrorized by a dragon called Stormterror. They work together with the Knights of Favonius to resolve the problem. They meet a carefree bard named Venti and learn that Stormterror – whose real name is Dvalin – is Venti's friend and has been corrupted by the Abyss Order. Venti reveals himself to be Barbatos, the Anemo Archon, and purifies Dvalin with help from the Traveler. After solving the crisis, Venti and the Traveler are ambushed by La Signora, the Eighth Fatui Harbinger, who steals Venti's Gnosis. After recovering, Venti suggests the Traveler to attend the Rite of Descension in Liyue as they will have to wait a whole year should they miss.</p>
    `,
    Liyue1: `
        <h3>Liyue Farewell, Archaic Lord</h3>
        <p>The Traveler and Paimon go to Liyue Harbor to attend a ritual for Rex Lapis, the Geo Archon, only for him to descend lifeless from the sky. They are assisted by Wangsheng Funeral Parlor consultant Zhongli and the Eleventh Fatui Harbinger, Tartaglia, in performing a rite of farewell for the Archon. However, Tartaglia betrays them in the end and attempts to steal Rex Lapis's Gnosis, but is stopped by the Traveler. Tartaglia summons the ancient serpent god Osial to attack Liyue, but the adepti and humans successfully defend the city. Later, the Traveler learns that Zhongli is actually Rex Lapis and that he has retired as an Archon, exchanging his Gnosis with La Signora in an undisclosed contract with the Tsaritsa, the Cryo Archon, to end all contracts.</p>
    `,
    Inazuma1: ` 
        <h3>Inazuma Omnipresence Over Mortals</h3>
        <p>The Traveler and Paimon sail to the isolationist nation of Inazuma, only to learn that the Raiden Shogun, the nation's Archon, has been confiscating Inazumans' Visions as part of the Vision Hunt Decree. After barely escaping the Shogun's forces, the Traveler and Paimon join a band of separatists in Inazuma's Watatsumi Island before meeting Scaramouche, the Sixth Fatui Harbinger. Though he knocks them unconscious, Yae Miko – the Shogun's familiar – gives him the Electro Gnosis in exchange for their lives. After recovering, the Traveler learns from Miko that they met Raiden Ei, the true Electro Archon who dwells within her inner world, and Kujou Takayuki, head of the Kujou Clan, betrayed the Shogunate. After exposing the Kujou Clan's collaboration with the Fatui, the Traveler returns and challenges La Signora to a duel, which she accepts. The Traveler then defeats La Signora, who is subsequently executed by the Shogun. The Traveler then battles and defeats Raiden Ei with Miko's help and convinces her to repeal her restrictive policies.</p>
    `,
    Sumeru1: ` 
        <h3>Sumeru Truth Amongst the Pages of Purana.</h3>
        <p>The Traveler and Paimon continue their search for answers in Sumeru by seeking an audience with Lesser Lord Kusanali, the Dendro Archon. However, they are unable to speak with her due to her imprisonment by the Akademiya. The Traveler eventually meets her human vessel, Nahida, within a dream, and discovers that the Akademiya's sages have partnered with Il Dottore, the Second Fatui Harbinger, to overthrow Kusanali and install Scaramouche as an artificial god. With the help of key individuals in Sumeru, the Traveler thwarts the sages' plot, rescues Kusanali, and defeats Scaramouche. They then meet Greater Lord Rukkhadevata, whom Kusanali has to erase from existence to purify Irminsul. This causes everyone on Teyvat, with the exception of the Traveler, to lose all their memories of Rukkhadevata ever existing.</p>
    `,
    Fontaine1: ` 
        <h3>Fontaine Masquerade of the Guilty</h3>
        <p>The Traveler and Paimon trek to Fontaine to meet Focalors, the Hydro Archon, also known as Lady Furina. They learn of the circulating prophecy that Fontaine would be flooded, leaving only the Hydro Archon weeping on her throne. The Traveler and Paimon become entangled in a case of serial killings and discover that a mysterious substance known as Primordial Seawater can dissolve Fontainians into water should they expose at high contraction. Amidst the concerns of Primordial Seawater flooding, Furina is revealed to be a cursed human instead of an Archon, split from Focalors' divinity as she worked to overturn the prophecy – a punishment for Egeria, the previous Hydro Archon, who had created humans using the power of Primordial Seawater without Celestia's permission. Having accumulated enough Indemnitium (power), Focalors executes herself, destroying the Hydro Archon's divine throne and thus restoring power to Neuvillette, the Hydro Dragon, who saves the Fontainians from the prophecy by turning them into true humans, preventing them from being dissolved.After the flood recedes, Furina abdicates from her role as Hydro Archon and leaves the related affairs to Neuvillette before leaving the Opera.</p>
    `,
};

const articles2 = {
    Mondstadt2: ` 
        <h3>Mondstadt</h3>
        <p>1.Flighty Flora... and Flora</p>
        <p>2.Mondstadt and Its Archon</p>
        <p>3.Windrise, Windfall</p>
        <p>4.Question and Answer</p>
        <p>5.Equivalent Exchange</p>
        <p>6.Lingering Malady</p>
        <p>7.Thief-Catcher</p>
        <p>8.After the Storm</p>
        <p>9.Cleanup At Dawn</p>
        <p>10.In the Aftermath</p>
        <p>11.Break the Sword Cemetery Seal</p>
        <p>12.Time and Wind</p>
        <p>13.In the Mountains</p>
        <p>14.The Festering Fang</p>
        <p>15.The Great Mountain Survey</p>
        <p>16.The Great Mountain Survey Ⅱ</p>
        <p>17.Ah, Fresh Meat!</p>
        <p>18.A Land Entombed</p>
        <p>19.Lost in the Snow</p>
    `,
    Liyue2: `
        <h3>Liyue</h3>
        <p>1.What Do Adventurers Do Again?</p>
        <p>2.Will of Stone</p>
        <p>3.A Quiet Day in Liyue Harbor</p>
        <p>4.Blackcliff Woes</p>
        <p>5.The Ocean Pearl</p>
        <p>6.A Lone Ship In Guyun</p>
        <p>7.Pressing Deadlines</p>
        <p>8.An Adeptal Summons</p>
        <p>9.The Adventurers' Guild's Affairs</p>
        <p>10.Necessary Procedures</p>
        <p>11.Words Worth Their Weight in Mora</p>
        <p>12.Changchang's Little Friend</p>
        <p>13.The Secret of Nantianmen</p>
        <p>14.An Ode to Yonder City</p>
        <p>15.Endless Research</p>
        <p>16.Overstretched</p>
        <p>17.Treasure Lost, Treasure Found</p>
        <p>18.The Tree who Stands Alone</p>
        <p>19.Old Tastes Die Hard</p>
        <p>20.Book in the Woods</p>
        <p>21.Share Not Your Treasures</p>
        <p>22.The Chi of Yore</p>
        <p>23.A Provisional Arrangement</p>
        <p>24.Big Business</p>
        <p>25.The Yaksha's Wish</p>
        <p>26.Nine Pillars of Peace</p>
        <p>27.And This Treasure Goes To...</p>
        <p>28.Trails in Tianqiu</p>
        <p>29.A Little Game</p>
        <p>30.Luhua Landscape</p>
        <p>31.Fishing For Jade</p>
        <p>32.Return of the Jade Chamber?</p>
        <p>33.Snapshots</p>
        <p>34.Perfect Shot</p>
        <p>35.Tianqiu Treasure Trail</p>
        <p>36.There's no restoring this past land of beauty</p>
        <p>37.Hereafter: The Trail of Pervases</p>
        <p>38.Hereafter: All is Well</p>
        <p>39.Hereafter: Return to the Mountains</p>
        <p>40.Surreptitious Seven-Star Seal Sundering</p>
        <p>41.Whence Did the Spiritstone Descend?</p>
    `,
    Inazuma2: ` 
        <h3>Inazuma</h3>
        <p>1.In Another Land</p>
        <p>2.International Travel Log</p>
        <p>3.The Gourmet Supremos: On the Road</p>
        <p>4.The Gourmet Supremos: The Importance of Eating Well</p>
        <p>5.Home Lies Over the Ocean</p>
        <p>6.O Archon, Have I Done Right?</p>
        <p>7.Battle of Revenge</p>
        <p>8.Yae Publishing House's Invitation</p>
        <p>9.Chisato's Letter</p>
        <p>10.Katheryne in Inazuma</p>
        <p>11.The Ritou Road</p>
        <p>12.The Art of Horticulture</p>
        <p>13.Hiromi's Watch</p>
        <p>14."The Seventh Samurai"</p>
        <p>15.Tatara Tales</p>
        <p>16.Gourmet Supremos, Assemble!</p>
        <p>17.Sakura Arborism</p>
        <p>18.Dreams of Sword Art</p>
        <p>19.Sacred Sakura Cleansing Ritual</p>
        <p>20.The Farmer's Treasure</p>
        <p>21.Orobashi's Legacy</p>
        <p>22.Treatment on the Island</p>
        <p>23.Gazing Three Thousand Miles Away</p>
        <p>24.Fate of a Fighter</p>
        <p>25.Seirai Stormchasers</p>
        <p>26.Reminiscence of Seirai</p>
        <p>27."Heart of Watatsumi"</p>
        <p>28.Divine Plant of the Depths</p>
        <p>29.The Three Great Martial Trials</p>
        <p>30.Solitary Sea-Beast</p>
        <p>31.Storytelling Method</p>
        <p>32.The Narukami Trail</p>
        <p>33.Fertilizer... Salesperson?</p>
        <p>34.The Sun-Wheel and Mt. Kanna</p>
        <p>35.The Saga of Mr. Forgetful</p>
        <p>36.Clean House</p>
        <p>37.The Subterranean Trials of Drake and Serpent</p>
        <p>38.Lotus Eater</p>
        <p>39.The Phaethons' Syrtos</p>
        <p>40.Collection of Dragons and Snakes</p>
    `,
    Sumeru2: ` 
        <h3>Sumeru</h3>
        <p>1.Gourmet Supremos: Within Our Duties</p>
        <p>2.The Price</p>
        <p>3.Another Horizon of Adventure</p>
        <p>4.Garcia's Paean: A Gift of Compatibility</p>
        <p>5.The Path of Papers</p>
        <p>6.For a Dream I Tarry</p>
        <p>7.Cost-Effective Hook</p>
        <p>8.Event Beasts Stumble</p>
        <p>9.Treasure of Wisdom: A New Plan</p>
        <p>10.Vimana Agama</p>
        <p>11.Until Vana is Healed</p>
        <p>12.Memory's Final Chapter</p>
        <p>13.Static Views</p>
        <p>14.Courage is in the Heart</p>
        <p>15.Where Are the Fierce Creatures?</p>
        <p>16.Aranyaka</p>
        <p>17.The Foolish Fatuus</p>
        <p>18.Agnihotra Sutra</p>
        <p>19.A Short Encounter with a Rare Bird</p>
        <p>20.Join the Eremites and Embrace a Wonderful New Life!</p>
        <p>21.Blooming Sands</p>
    `,
    Fontaine2: ` 
        <h3>Fontaine</h3>
        <p>1.Happy Birthday</p>
        <p>2.Danger Lurks Everywhere in Fontaine</p>
        <p>3.A Certain Notice</p>
        <p>4.A Certain Trifle</p>
        <p>5.A Certain Stamp</p>
        <p>6.The Fountain Flows Again</p>
        <p>7.Ann's Story</p>
        <p>8.Aqueous Tidemarks</p>
        <p>9.Truly Mouthwatering!</p>
        <p>10.The Lone Phantom Sail</p>
        <p>11."Hey, This Isn't Pumpkin Soup..."</p>
        <p>12.Strange Stone Chronicle</p>
        <p>13.Were It So Easy</p>
        <p>14.Upon a Flowery Field of Grass</p>
        <p>15.In the Wake of Narcissus</p>
        <p>16.The Wild Fairy of Erinnyes</p>
        <p>17.Questioning Melusine and Answering Machine</p>
        <p>18.An Expected Lie</p>
        <p>19.Wish-Fulfilling Treasure Hunt</p>
        <p>20.Impromptu Poem of the Crimson Dawn</p>
    `,
};

const articles3 = {
    Mondstadt3: ` 
        <h3>Mondstadt 5-Star Characters</h3>
        <p>Pyro：Diluc Noctua Chapter</p>
        <p>Pyro：Klee Trifolium Chapter</p>
        <p>Anemo：Jean Leo Minor Chapter</p>
        <p>Anemo：Venti Carmen Dei Chapter</p>
        <p>Hydro：Mona Astrolabos Chapter</p>
        <p>Geo：Albedo Princeps Cretaceus Chapter</p>
        <p>Cryo：Eula Aphros Delos Chapter</p>
    `,
    Liyue3: `
        <h3>Liyue 5-Star Characters</h3>
        <p>Hydro：Tartaglia Monoceros Caeli Chapter</p>
        <p>Geo：Zhongli Historia Antiqua Chapter</p>
        <p>Cryo：Ganyu Sinae Unicornis Chapter</p>
        <p>Anemo：Xiao Alatus Chapter</p>
        <p>Pyro：Hu Tao Papilio Charontis Chapter</p>
        <p>Dendro：Baizhu Lagenaria Chapter</p>
        <p>Anemo：Xianyun Grus Serena Chapter</p>
    `,
    Inazuma3: ` 
        <h3>Inazuma 5-Star Characters</h3>
        <p>Cryo：Ayaka Grus Nivis Chapter</p>
        <p>Pyro：Yoimiya Carassius Auratus Chapter</p>
        <p>Electro：Raiden Shogun Imperatrix Umbrosa Chapter</p>
        <p>Hydro：Kokomi Dracaena Somnolenta Chapter</p>
        <p>Geo：Itto Taurus Iracundus Chapter</p>
        <p>Electro：Yae Miko Divina Vulpes Chapter</p>
        <p>Hydro：Ayato Cypressus Custos Chapter</p>
        <p>Anemo：Kazuha Acer Palmatum Chapter</p>
    `,
    Sumeru3: ` 
        <h3>Sumeru 5-Star Characters</h3>
        <p>Dendro：Tighnari Vulpes Zerda Chapter</p>
        <p>Hydro：Nilou Lotos Somno Chapter</p>
        <p>Electro：Cyno Lupus Aureus Chapter</p>
        <p>Dendro：Nahida Sapientia Oromasdis Chapter</p>
        <p>Dendro：Alhaitham Vultur Volans Chapter</p>
        <p>Pyro：Dehya Mantichora Chapter</p>
    `,
    Fontaine3: ` 
        <h3>Fontaine 5-Star Characters</h3>
        <p>Pyro：Lyney Felis Fuscus Chapter</p>
        <p>Cryo：Wriothesley Cerberus Chapter</p>
        <p>Geo：Navia Rosa Multiflora Chapter</p>
        <p>Geo：Chiori Cisoria Chapter</p>
        <p>Pyro：Arlecchino Ignis Purgatorius Chapter</p>
        <p>Hydro：Neuvillette Diluvies Chapter</p>
        <p>Hydro：Furina Animula Choragi Chapter</p>
        <p>Electro：Clorinde Rappiera Chapter</p>
    `,
};

const articles4 = {
    Mondstadt4: ` 
        <h3>Mondstadt 4-Star Characters</h3>
        <p>Pyro：Bennett Fantastic Voyage</p>
        <p>Hydro：Barbara Wellspring of Healing</p>
        <p>Geo：Noelle Chivalric Training</p>
        <p>Cryo：Diona The Cat and the Cocktail</p>
        <p>Cryo：Kaeya Shenanigans and Sweet Wine</p>
    `,
    Liyue4: `
        <h3>Liyue 4-Star Characters</h3>
        <p>Cryo：Chongyun Signs of Evil</p>
        <p>Geo：Yun Jin A Song That Knows Grace</p>
        <p>Geo：Ningguang The Jade Chamber's Returning Guest</p>
    `,
    Inazuma4: ` 
        <h3>Inazuma 4-Star Characters</h3>
        <p>Pyro：Thoma A Housekeeper's Daily Chores</p>
        <p>Anemo：Sayu Yoohoo Art: Seichou no Jutsu</p>
        <p>Electro：Beidou When the Crux Shines Bright</p>
        <p>Geo：Gorou The Canine General's Special Operations</p>
        <p>Electro：Kuki Shinobu The Gang's Daily Deeds</p>
        <p>Anemo：Shikanoin Heizou Trap 'Em by Storm</p>
    `,
    Sumeru4: ` 
        <h3>Sumeru 4-Star Characters</h3>
        <p>Dendro：Faruzan A Confounding Conundrum</p>
        <p>Cryo：Layla Ever Silent Stars</p>
        <p>Dendro：Kaveh The Pendulum of Weal and Woe</p>
    `,
    Fontaine4: ` 
        <h3>Fontaine 4-Star Characters</h3>
        <p>Anemo：Lynette Checks & Cats</p>
    `,
};


document.getElementById('Story').addEventListener('click', function() { 
    document.getElementById('Content').innerHTML = StoryContent; /*點擊出現StoryContent(劇情)的內容*/
    
    document.getElementById('MainStory').addEventListener('click', function() { /*點擊出現MainStory(主線的內容)*/
        document.getElementById('ChoiceStoryDown').innerHTML = MainStoryOption;

        const chapterSelect = document.getElementById('MChapter');
        const chapterRight = document.getElementById('MChapterRight');

        chapterSelect.addEventListener('change', function() { /*選擇Select出現對應文章*/
            const selectedValue = chapterSelect.value;
            const selectedArticle = articles1[selectedValue];
            chapterRight.innerHTML = selectedArticle;
        });
    });

    document.getElementById('SideStory').addEventListener('click', function() { /*點擊出現SideStory(支線的內容)*/
        document.getElementById('ChoiceStoryDown').innerHTML = SideStoryOption;

        const chapterSelect = document.getElementById('SChapter');
        const chapterRight = document.getElementById('SChapterRight');

        chapterSelect.addEventListener('change', function() { /*選擇Select出現對應文章*/
            const selectedValue = chapterSelect.value;
            const selectedArticle = articles2[selectedValue];
            chapterRight.innerHTML = selectedArticle;
        });
    });

    document.getElementById('LegendStory').addEventListener('click', function() { /*點擊出現LegendStory(傳說任務的內容)*/
        document.getElementById('ChoiceStoryDown').innerHTML = LegendStoryOption;

        const chapterSelect = document.getElementById('LChapter');
        const chapterRight = document.getElementById('LChapterRight');

        chapterSelect.addEventListener('change', function() { /*選擇Select出現對應文章*/
            const selectedValue = chapterSelect.value;
            const selectedArticle = articles3[selectedValue];
            chapterRight.innerHTML = selectedArticle;
        });
    });

    document.getElementById('InvitationStory').addEventListener('click', function() { /*點擊出現InvitationStory(邀約任務的內容)*/
        document.getElementById('ChoiceStoryDown').innerHTML = InvitationStoryOption;

        const chapterSelect = document.getElementById('IChapter');
        const chapterRight = document.getElementById('IChapterRight');

        chapterSelect.addEventListener('change', function() { /*選擇Select出現對應文章*/
            const selectedValue = chapterSelect.value;
            const selectedArticle = articles4[selectedValue];
            chapterRight.innerHTML = selectedArticle;
        });
    });
});

document.getElementById('Lottery').addEventListener('click', function() { /*點擊出現LotteryContent的內容*/
    document.getElementById('Content').innerHTML = LotteryContent;
});

function showSelectedImage() {
    var selectedValue = document.getElementById('selection').value;
    var selectedImage = document.getElementById("selectedImage");
    
    selectedImage.src = selectedValue; // 根據選擇的值顯示對應的圖片
    selectedImage.style.display = "block";
}

document.getElementById('Map').addEventListener('click', function() { /*點擊出現MapContent的內容*/
    document.getElementById('Content').innerHTML = MapContent;
    var image = document.getElementById('selectedImage2');
    var areaText1 = document.getElementById('areaText1'); /*蒙德文字方塊*/
    var areaText2 = document.getElementById('areaText2'); /*璃月文字方塊*/
    var areaText3 = document.getElementById('areaText3'); /*稻妻文字方塊*/
    var areaText4 = document.getElementById('areaText4'); /*須彌文字方塊*/
    var areaText5 = document.getElementById('areaText5'); /*楓丹文字方塊*/

    image.addEventListener('mousemove', function(event) {
        var x = event.clientX - image.getBoundingClientRect().left; /* 鼠標在圖片內的水平位置 */
        var y = event.clientY - image.getBoundingClientRect().top; /* 鼠標在圖片內的垂直位置 */

        if (x >= 370 && x <= 510 && y >= 100 && y <= 200) {
            areaText1.style.left = x + 'px';
            areaText1.style.top = y + 'px';
            areaText1.style.display = 'block';
            areaText1.innerText = 'Mondstadt'; 
            areaText2.style.display = 'none';
            areaText3.style.display = 'none';
            areaText4.style.display = 'none';
            areaText5.style.display = 'none';
        }
        else if(x >= 280 && x <= 390 && y >= 170 && y <= 300){
            areaText2.style.left = x + 'px'; 
            areaText2.style.top = y+ 'px';
            areaText2.style.display = 'block';
            areaText2.innerText = 'Liyue';
            areaText1.style.display = 'none';
            areaText3.style.display = 'none';
            areaText4.style.display = 'none';
            areaText5.style.display = 'none';
        }
        else if(x >= 400 && x <= 650 && y >= 330 && y <= 600){
            areaText3.style.left = x + 'px'; /*文字顯示與滑鼠距離x座標的位置*/
            areaText3.style.top = y + 'px';
            areaText3.style.display = 'block';
            areaText3.innerText = 'Inazuma';
            areaText1.style.display = 'none';
            areaText2.style.display = 'none';
            areaText4.style.display = 'none';
            areaText5.style.display = 'none';
        }
        else if(x >= 100 && x <= 250 && y >= 250 && y <= 400){
            areaText4.style.left = x + 'px'; /*文字顯示與滑鼠距離x座標的位置*/
            areaText4.style.top = y + 'px';
            areaText4.style.display = 'block';
            areaText4.innerText = 'Sumeru';
            areaText1.style.display = 'none';
            areaText2.style.display = 'none';
            areaText3.style.display = 'none';
            areaText5.style.display = 'none';
        }
        else if (x >= 150 && x <= 200 && y >= 50 && y <= 150) {
            areaText5.style.left = x + 'px'; /*文字顯示與滑鼠距離x座標的位置*/
            areaText5.style.top = y+ 'px';
            areaText5.style.display = 'block';
            areaText5.innerText = 'Fontaine'; 
            areaText1.style.display = 'none';
            areaText2.style.display = 'none';
            areaText3.style.display = 'none';
            areaText4.style.display = 'none';
        } 
        else {
            areaText1.style.display = 'none'; /* 其他情況隱藏文字區域 */
            areaText2.style.display = 'none';
            areaText3.style.display = 'none';
            areaText4.style.display = 'none';
            areaText5.style.display = 'none';
        }
    });

    image.addEventListener('mouseleave', function() {
        areaText1.style.display = 'none';
        areaText2.style.display = 'none';
        areaText3.style.display = 'none';
        areaText4.style.display = 'none';
        areaText5.style.display = 'none';
    });
});

document.getElementById('Role').addEventListener('click', function() { /*點擊出現CardContent的內容*/
    document.getElementById('Content').innerHTML = RoleContent;

    var Klee = document.getElementById('Klee');
    var RoleNameText1 = document.getElementById('RoleNameText1'); /*可莉文字方塊*/
    var Kokomi = document.getElementById('Kokomi');
    var RoleNameText2 = document.getElementById('RoleNameText2'); /*珊瑚宮心海文字方塊*/
    var Hutao = document.getElementById('Hutao');
    var RoleNameText3 = document.getElementById('RoleNameText3'); /*胡桃文字方塊*/
    var Alhaitham = document.getElementById('Alhaitham');
    var RoleNameText4 = document.getElementById('RoleNameText4'); /*艾爾海森文字方塊*/
    var Neuvillette = document.getElementById('Neuvillette');
    var RoleNameText5 = document.getElementById('RoleNameText5'); /*那維萊特文字方塊*/
    var Shenhe = document.getElementById('Shenhe');
    var RoleNameText6 = document.getElementById('RoleNameText6'); /*申鶴文字方塊*/

    Klee.addEventListener('mouseover', function() {
        RoleNameText1.style.display = 'block';
        RoleNameText1.innerText = 'KL'; 
        RoleNameText1.style.top = Klee.offsetTop - RoleNameText1.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText1.style.left = Klee.offsetLeft + RoleNameText1.offsetWidth + 20 + 'px';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Klee.addEventListener('mouseout', function() {
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Klee.addEventListener('click', function() { /*點擊跳轉至Klee.html */
        window.location.href = '../roles/Klee.html'; 
    });
    Kokomi.addEventListener('mouseover', function() {
        RoleNameText2.style.display = 'block';
        RoleNameText2.innerText = 'XH'; 
        RoleNameText2.style.top = Kokomi.offsetTop - RoleNameText2.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText2.style.left = Kokomi.offsetLeft + RoleNameText2.offsetWidth + 20 + 'px';
        RoleNameText1.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Kokomi.addEventListener('mouseout', function() {
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Kokomi.addEventListener('click', function() { /*點擊跳轉至Kokomi.html */
        window.location.href = '../roles/Kokomi.html'; 
    });
    Hutao.addEventListener('mouseover', function() {
        RoleNameText3.style.display = 'block';
        RoleNameText3.innerText = 'HT'; 
        RoleNameText3.style.top = Hutao.offsetTop - RoleNameText3.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText3.style.left = Hutao.offsetLeft + RoleNameText3.offsetWidth + 20 + 'px';
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Hutao.addEventListener('mouseout', function() {
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Hutao.addEventListener('click', function() { /*點擊跳轉至Hutao.html */
        window.location.href = '../roles/Hutao.html'; 
    });
    Alhaitham.addEventListener('mouseover', function() {
        RoleNameText4.style.display = 'block';
        RoleNameText4.innerText = 'HT'; 
        RoleNameText4.style.top = Alhaitham.offsetTop - RoleNameText4.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText4.style.left = Alhaitham.offsetLeft + RoleNameText4.offsetWidth + 20 + 'px';
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Alhaitham.addEventListener('mouseout', function() {
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Alhaitham.addEventListener('click', function() { /*點擊跳轉至Alhaitham.html */
        window.location.href = '../roles/Alhaitham.html'; 
    });
    Neuvillette.addEventListener('mouseover', function() {
        RoleNameText5.style.display = 'block';
        RoleNameText5.innerText = 'NV'; 
        RoleNameText5.style.top = Neuvillette.offsetTop - RoleNameText5.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText5.style.left = Neuvillette.offsetLeft + RoleNameText5.offsetWidth + 20 + 'px';
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Neuvillette.addEventListener('mouseout', function() {
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Neuvillette.addEventListener('click', function() { /*點擊跳轉至Neuvillette.html */
        window.location.href = '../roles/Neuvillette.html'; 
    });
    Shenhe.addEventListener('mouseover', function() {
        RoleNameText6.style.display = 'block';
        RoleNameText6.innerText = 'SH'; 
        RoleNameText6.style.top = Shenhe.offsetTop - RoleNameText6.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText6.style.left = Shenhe.offsetLeft + RoleNameText6.offsetWidth + 20 + 'px';
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
    });
    Shenhe.addEventListener('mouseout', function() {
        RoleNameText1.style.display = 'none';
        RoleNameText2.style.display = 'none';
        RoleNameText3.style.display = 'none';
        RoleNameText4.style.display = 'none';
        RoleNameText5.style.display = 'none';
        RoleNameText6.style.display = 'none';
    });
    Shenhe.addEventListener('click', function() { /*點擊跳轉至Shenhe.html */
        window.location.href = '../roles/Shenhe.html'; 
    });
});