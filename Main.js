const StoryContent = `
    <div id="ChoiceStory">
        <div id="ChoiceStoryUp">
            <p id="MainStory">Archon Quest</p>
            <p id="SideStory">支線</p> 
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
                <option value="Plot1">劇情</option>
                <option value="Setup1">遊戲設定</option>
                <option value="Mondstadt1">蒙德篇</option>
                <option value="Liyue1">璃月篇</option>
                <option value="Inazuma1">稻妻篇</option>
                <option value="Sumeru1">須彌篇</option>
                <option value="Fontaine1">楓丹篇</option>
            </select>
        </div>
        <div id="MChapterRight">
        <h3>劇情概述</h3>
            <p>「空」和「熒」是在星海中結伴的旅行者，降臨在提瓦特後便目睹了坎瑞亞的滅亡，決定離開提瓦特之時被「天理的維繫者」阻攔並被封印，因而雙子失散。其中一位（玩家所扮演的角色，一般直接以「旅行者」代稱）在沉睡500年後醒來，為了尋找血親，踏上了周遊提瓦特七國的旅途。</p>
        </div>
    </div>
`;

const SideStoryOption = `
    <div id="SChapterDown">
        <div id="SChapterLeft">
            <select id="SChapter">
                <option value="Mondstadt2">蒙德</option>
                <option value="Liyue2">璃月</option>
                <option value="Inazuma2">稻妻</option>
                <option value="Sumeru2">須彌</option>
                <option value="Fontaine2">楓丹</option>
            </select>
        </div>
        <div id="SChapterRight">
            <h3>蒙德</h3>
            <p>1.輕飄飄的花與芙蘿拉</p>
            <p>2.風神與蒙德</p>
            <p>3.風起風息</p>
            <p>4.騎士團手冊問答</p>
            <p>5.等量交換</p>
            <p>6.風暴後遺症</p>
            <p>7.捕盜</p>
            <p>8.風後寶礦</p>
            <p>9.酒莊大掃除</p>
            <p>10.善後工作</p>
            <p>11.探索劍塚封印</p>
            <p>12.時與風</p>
            <p>13.山中之物</p>
            <p>14.腐殖之牙</p>
            <p>15.雪山大勘測</p>
            <p>16.雪山再勘測</p>
            <p>17.啊，新鮮的肉</p>
            <p>18.覆雪之國</p>
            <p>19.雪山迷蹤</p>
        </div>
    </div>
`;

const LegendStoryOption = `
    <div id="LChapterDown">
        <div id="LChapterLeft">
            <select id="LChapter">
                <option value="Mondstadt3">Mondstadt 5-Star Role</option>
                <option value="Liyue3">Liyue 5-Star Role</option>
                <option value="Inazuma3">Inazuma 5-Star Role</option>
                <option value="Sumeru3">Sumeru 5-Star Role</option>
                <option value="Fontaine3">Fontaine 5-Star Role</option>
            </select>
        </div>
        <div id="LChapterRight">
            <h3>Mondstadt 5-Star Role</h3>
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
                <option value="Mondstadt4">蒙德四星角色</option>
                <option value="Liyue4">璃月四星角色</option>
                <option value="Inazuma4">稻妻四星角色</option>
                <option value="Sumeru4">須彌四星角色</option>
                <option value="Fontaine4">楓丹四星角色</option>
            </select>
        </div>
        <div id="IChapterRight">
            <h3>蒙德四星角色</h3>
            <p>火系：班尼特 第一幕 美妙旅程</p>
            <p>水系：芭芭拉 第一幕 治癒的清泉</p>
            <p>岩系：諾艾爾 第一幕 騎士修行之道</p>
            <p>岩系：諾艾爾 第二幕 騎士備考之道</p>
            <p>冰系：迪奧娜 第一幕 貓與特調酒</p>
            <p>冰系：凱亞 第一幕 鬼話與甜酒</p>
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
                        <option value="10up.png">1.0</option>
                        <option value="11up.png">1.1</option>
                        <option value="12up.png">1.2</option>
                        <option value="13up.png">1.3</option>
                        <option value="14up.jpeg">1.4</option>
                        <option value="15up.png">1.5</option>
                        <option value="16up.png">1.6</option>
                        <option value="20up.png">2.0</option>
                        <option value="21up.png">2.1</option>
                        <option value="22up.png">2.2</option>
                    </select>
                </td>
                <td id="tablerightdown"><img id="selectedImage" class="selectedImage" src="10up.png" alt="Selected Image"></td>
            </tr>
        </table>
    </div>
`;

const MapContent = `
    <div class="MChapterDown">
        <img id="selectedImage2" class="selectedImage" src="map.png" alt="Selected Image">
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
            <img id="Kokomi" src="珊瑚宮心海.png">
            <img id="Hutao" src="胡桃.png">
            <img id="Alhaitham" src="艾爾海森.png">
            <img id="Neuvillette" src="那維萊特.jpg">
            <img id="Klee" src="可莉.png">
            <img id="Shenhe" src="申鶴.jpg">
        </div>
    </div>
`;

const articles1 = {
    Plot1: ` 
        <h3>劇情概述</h3>
        <p>「空」和「熒」是在星海中結伴的旅行者，降臨在提瓦特後便目睹了坎瑞亞的滅亡，決定離開提瓦特之時被「天理的維繫者」阻攔並被封印，因而雙子失散。其中一位（玩家所扮演的角色，一般直接以「旅行者」代稱）在沉睡500年後醒來，為了尋找血親，踏上了周遊提瓦特七國的旅途。</p>
    `,
    Setup1: `
        <h3>遊戲設定</h3>
        <p>《原神》設定在名為「提瓦特」的幻想世界中。提瓦特總共分為七個主要國家，分別由掌管不同元素和理念的神祇（稱為「塵世七執政」）統治，各國政治形態亦不盡相同。懸於提瓦特天空之上的「天空島」，是包括「天理」在內的更高位階神祇的居所，也是擁有強大願望之人成神後的去處。在提瓦特大陸的地底埋藏著被「天理」覆滅的古國「坎瑞亞」的遺蹟。不同於與神同行的七國，坎瑞亞並不是由神祇統治，而是由人類建立和自治的國家。提瓦特過去有過權力更替，遠古由執掌七種元素的七位「龍王」統治，後來陸續有來自世界之外的「降臨者」來到提瓦特，前兩位降臨者被稱為「第一王座」和「第二王座」。「第一王座」即為「天理」，祂打敗了七龍王，將他們的「古龍大權」奪走，分派給了「塵世七執政」，這些權能後來被稱為「神座」。倖存的七龍王，有些存世，有些轉生。</p>
        <p>當一個人強大的願望獲得「天理」的注意，七神受「天理」指示，就會給予認可之人自己「神座」的部分力量，具象化為法器「神之眼」。「神之眼」給予使用者驅動某一元素之能；同時，此人也獲得了登上天空島成神的資格，稱為「原神」。除了「神之眼」外，至冬國的特務機構「愚人眾」也研發出了另一法器「邪眼」，由逝去魔神的遺骸殘渣製成，可以透過投餵生命力來獲得驅動元素之能。塵世七執政則憑藉「神之心」與天空島保持聯繫，並藉由「神之心」增幅元素權能以治理國家。</p>
        <p>遊戲的主人公是「旅行者」和派蒙。「旅行者」和其雙胞胎血親來自世界之外的寰宇，在遊戲劇情之初被迫分離，因此「旅行者」不得不踏上於提瓦特大陸尋找血親之旅。「旅行者」為提瓦特大陸的第四降臨者。玩家可以在「空」和「熒」中選擇一人扮演「旅行者」，另一人則為其血親；除了「空」和「熒」之一，「旅行者」另有在提瓦特通行的名字，此名字由玩家自訂。派蒙則為「旅行者」在遊戲劇情之初結識的夥伴和旅行中的嚮導。</p>
        <p>遊戲中主要的反派陣營包括：「深淵教團」，由來自坎瑞亞的魔物和受詛咒的坎瑞亞民組成，意圖推翻七神統治；以及「愚人眾」，至冬國的外交、軍事和特務機構，在七國遍佈橫行，為冰神收集「神之心」。「旅行者」的血親被深淵教團尊為領導人（「公主殿下」或「王子殿下」）；而愚人眾則由十一位「執行官」代行冰神的權能和意志。</p>
    `,
    Mondstadt1: ` 
        <h3>蒙德篇 捕風的異鄉人</h3>
        <p>旅行者來到自由之國蒙德後恰逢風魔龍特瓦林在深淵教團的蠱惑下想要毀滅蒙德，旅行者與溫迪、西風騎士團代理團長琴、迪盧克等人最終拯救了特瓦林，化解了這次危機，同時得知溫迪的真實身分是蒙德的統治者風神巴巴托斯，但返回途中組織愚人眾的執行官「女士」突然出現奪走了溫迪的「神之心」。</p>
    `,
    Liyue1: `
        <h3>璃月篇 辭行久遠之軀</h3>
        <p>旅行者在溫迪的建議下前往契約之國璃月尋找岩王帝君，岩王帝君卻在「請仙典儀」上遇害仙隕。旅行者被千岩軍懷疑，於是前往望舒客棧尋找三眼五顯仙人尋求公道，之後又與往生堂客卿鍾離準備送仙的各種用具。仙人與代理執政的璃月七星衝突升級，愚人眾執行官「公子」趁機召喚出被封印的魔神奧賽爾襲擊璃月港，旅行者在璃月七星及仙人的幫助下與奧賽爾作戰，最終凝光將其懸浮在空中的住所「群玉閣」砸下，再次封印了奧賽爾。風波結束後，旅行者得知鍾離就是岩神摩拉克斯，岩王帝君仙隕只是自己策劃的假死事件，並依照與冰神訂立的「終結一切契約的契約」將「神之心」交予「女士」。</p>
    `,
    Inazuma1: ` 
        <h3>稻妻篇 千手百眼天下人間</h3>
        <p>旅行者經由北斗的船隊突破雷暴抵達永恆之國稻妻，希望見到統治者雷電將軍，卻得知幕府正在推行「眼狩令」，旅行者突襲救下因持有「神之眼」而被逮捕的托馬並在被雷電將軍打敗後與托馬共同逃離，接著前往稻妻的反抗軍營地，透過八重神子的鍛鍊和神里家的支援，旅行者在決鬥中成功戰勝了在稻妻策劃陰謀的「女士」，接著在反抗軍的配合下與雷電將軍的真身「影」交手，成功獲勝並說服她廢除眼狩令，最後卻得知「神之心」已被愚人眾執行官「散兵」帶走。</p>
    `,
    Sumeru1: ` 
        <h3>須彌篇 虛空劫灰往世書</h3>
        <p>旅行者前往智慧之國須彌尋找小吉祥草王，卻誤入了由實際統治須彌的教令院在須彌城所製造的循環夢境，最終與須彌神明納西妲等人一同打破迴圈，將須彌民眾從夢境中解放出來。在旅行者與納西妲聯手調查下，教令院「造神」的陰謀逐漸浮出水面，但途中被愚人眾執行官「博士」出手干預，並斷絕了納西妲與外界的聯絡。旅行者與眾人深入沙漠，在赤王陵中揭開了草神、花神和赤王的歷史。接著又與眾人制定反攻計畫救出納西妲，擊敗「散兵」並奪回「神之心」，挫敗了教令院與愚人眾的陰謀，重獲自由的納西妲以「神之心」作為交易換取「博士」摧毀自己全部切片以及提瓦特大陸真相的「秘密」，並從教令院手上接掌統治權。</p>
    `,
    Fontaine1: ` 
        <h3>楓丹篇 罪人舞步旋</h3>
        <p>旅行者前往正義之國楓丹，解決了當地魔術師林尼與其助手琳妮特的魔術中的殺人案。隨後，旅行者發現能將楓丹人溶解的「原始胎海之水」，並以此為線索調查了數年前的案件「少女連環失蹤案」。最終該案真正兇手瓦謝被旅行者指控後，抑鬱而死。數日後，旅行者應那維萊特的請求前往楓丹監獄梅洛彼德堡與林尼一同調查。在一段時間的生活後旅行者開始與當地的實際管理者萊歐斯利交涉，並發現了梅洛彼德堡下方的「原始胎海」。在其中的水爆發之際，那維萊特前往此地將其鎮壓。隨後發生了多次原始胎海之水爆發事故，旅行者等人懷疑芙寧娜並非真正的神明，於是發起了對她的審判。隨後旅行者得知了真正的水神芙卡洛斯創造了芙寧娜偽裝水神並遭受痛苦從而欺騙天理拯救楓丹居民的事實。在審判中，機關「諭示裁定樞機」將芙卡洛斯處死，那維萊特繼承其權能，並使楓丹人不會溶解於原始胎海之水。</p>
    `,
};

const articles2 = {
    Mondstadt2: ` 
        <h3>蒙德</h3>
        <p>1.輕飄飄的花與芙蘿拉</p>
        <p>2.風神與蒙德</p>
        <p>3.風起風息</p>
        <p>4.騎士團手冊問答</p>
        <p>5.等量交換</p>
        <p>6.風暴後遺症</p>
        <p>7.捕盜</p>
        <p>8.風後寶礦</p>
        <p>9.酒莊大掃除</p>
        <p>10.善後工作</p>
        <p>11.探索劍塚封印</p>
        <p>12.時與風</p>
        <p>13.山中之物</p>
        <p>14.腐殖之牙</p>
        <p>15.雪山大勘測</p>
        <p>16.雪山再勘測</p>
        <p>17.啊，新鮮的肉</p>
        <p>18.覆雪之國</p>
        <p>19.雪山迷蹤</p>
    `,
    Liyue2: `
        <h3>璃月</h3>
        <p>1.冒險家…該幹嘛？</p>
        <p>2.重岩之意</p>
        <p>3.璃月港平靜的一天</p>
        <p>4.黑岩之困</p>
        <p>5.海上盛珠鈿</p>
        <p>6.孤艦履孤雲</p>
        <p>7.工作迫近</p>
        <p>8.承仙所託</p>
        <p>9.冒險家協會的諸多事宜</p>
        <p>10.必要手續</p>
        <p>11.書抵萬金</p>
        <p>12.暢暢和她的小夥伴</p>
        <p>13.南天門之謎</p>
        <p>14.此詩送此城</p>
        <p>15.永無止盡的研究</p>
        <p>16.獨木難支</p>
        <p>17.寶藏歸離</p>
        <p>18.孤木孑立，無林可依</p>
        <p>19.舊味難尋</p>
        <p>20.林中小書</p>
        <p>21.懷寶應自珍</p>
        <p>22.古云有「螭」</p>
        <p>23.暫行之策</p>
        <p>24.大生意</p>
        <p>25.夜叉之願</p>
        <p>26.靖世九柱</p>
        <p>27.靈矩有寶予何人</p>
        <p>28.循仙蹤兮天遒</p>
        <p>29.遊戲一場</p>
        <p>30.淥華景畫</p>
        <p>31.海上拾玉</p>
        <p>32.群玉閣…再現？</p>
        <p>33.暫留此影</p>
        <p>34.完美留影</p>
        <p>35.天遒寶跡</p>
        <p>36.恨繁囿兮作土</p>
        <p>37.身後事，銅雀之跡</p>
        <p>38.身後事，諸事平安</p>
        <p>39.身後事，歸於山中</p>
        <p>40.巧瞞七星解磐鍵</p>
        <p>41.靈石何故墮此間</p>
        <p>42.潛身敵營無人知</p>
        <p>43.岩巔大俠往事</p>
        <p>44.千年千岩</p>
        <p>45.物歸原主又歸原主</p>
        <p>46.藏石者言</p>
        <p>47.失蹤的礦工</p>
        <p>48.臺上臺下</p>
        <p>49.水土暫服</p>
        <p>50.故事繁多的翹英莊</p>
        <p>51.契約之砂</p>
        <p>52.雲雲椒椒</p>
        <p>53.沉玉之旅</p>
        <p>54.仙人遊莊</p>
        <p>55.攸望三疊</p>
        <p>56.秘谷俠隱</p>
    `,
    Inazuma2: ` 
        <h3>稻妻</h3>
        <p>1.在他鄉</p>
        <p>2.諸國遊記</p>
        <p>3.全能美食隊．尋食之旅</p>
        <p>4.全能美食隊．吃飽的重要性</p>
        <p>5.海的那頭是故鄉</p>
        <p>6.神明啊，我做得對嗎？</p>
        <p>7.洗刷恥辱的一戰</p>
        <p>8.「八重堂」的邀約</p>
        <p>9.千里之信</p>
        <p>10.千里之信</p>
        <p>11.凱瑟琳，在稻妻</p>
        <p>12.離島之路</p>
        <p>13.栽種大法</p>
        <p>14.廣海的守望</p>
        <p>15.《第七個武士》</p>
        <p>16.全能美食隊！</p>
        <p>17.踏鞴物語．終幕</p>
        <p>18.醫櫻</p>
        <p>19.刀劍成夢</p>
        <p>20.神櫻大祓．影向袚行</p>
        <p>21.農民的寶藏</p>
        <p>22.遠呂羽氏遺事．其五</p>
        <p>23.孤島診療譚</p>
        <p>24.執望三千里</p>
        <p>25.武者的宿命</p>
        <p>26.清籟逐雷記</p>
        <p>27.清籟舊憶</p>
        <p>28.「海祇之心」</p>
        <p>29.海淵仙草靈驗記</p>
        <p>30.三隅道大演武</p>
        <p>31.孤獨的海獸</p>
        <p>32.故事構思法</p>
        <p>33.鳴神尋蹤</p>
        <p>34.肥料…推銷員</p>
        <p>35.日輪與菅名山</p>
        <p>36.健忘大王歷險記</p>
        <p>37.門戶清理</p>
        <p>38.龍蛇洞宮試煉記</p>
        <p>39.食蓮者</p>
        <p>40.法厄同們全跳舞</p>
        <p>41.止水之潘</p>
        <p>42.龍蛇藏歸輯錄</p>
    `,
    Sumeru2: ` 
        <h3>須彌</h3>
        <p>1.全能美食隊．職責在內</p>
        <p>2.代價</p>
        <p>3.冒險就要大步向前</p>
        <p>4.加爾恰的讚歌．相容性贈禮</p>
        <p>5.求學漫漫路</p>
        <p>6.趁夢想氣息逗留</p>
        <p>7.魚鉤的物盡其用</p>
        <p>8.獸有失蹄</p>
        <p>9.智中之寶．新計畫</p>
        <p>10.吉祥具書</p>
        <p>11.直到「桓那」痊癒</p>
        <p>12.水天供書</p>
        <p>13.回憶終章</p>
        <p>14.靜態風景．後篇</p>
        <p>15.勇氣戴於心上</p>
        <p>16.兇猛動物在哪裡</p>
        <p>17.森林書</p>
        <p>18.願為一炊之夢</p>
        <p>19.愚人者人愚之</p>
        <p>20.正法炬書</p>
        <p>21.與珍稀之鳥的短暫邂逅</p>
        <p>22.加入鍍金旅團，擁抱美好生活</p>
        <p>23.沙上花</p>
        <p>24.熱砂之夢</p>
        <p>25.二重證據</p>
        <p>26.阿弗拉圖之惑</p>
        <p>27.索赫爾的心願</p>
        <p>28.智慧築屋，鑿成七柱</p>
        <p>29.流沙如淚的神殿</p>
        <p>30.埋葬豐饒的沙丘</p>
        <p>31.永恆的蔥蘢之夢</p>
        <p>32.蒂爾．亞什特的讚歌</p>
        <p>33.普爾比魯尼之誠</p>
    `,
    Fontaine2: ` 
        <h3>楓丹</h3>
        <p>1.生日快樂</p>
        <p>2.超越時空之空想</p>
        <p>3.冒險就要朝著遠方</p>
        <p>4.危機四伏的楓丹廷</p>
        <p>5.一份通知</p>
        <p>6.一件小事</p>
        <p>7.一枚印章</p>
        <p>8.泉有重噴日</p>
        <p>9.安的故事．序章</p>
        <p>10.西摩爾的故事．序章</p>
        <p>11.水色朝痕</p>
        <p>12.真是讓人垂涎欲滴！</p>
        <p>13.孤帆幽影</p>
        <p>14.「這才不是南瓜湯…」</p>
        <p>15.奇石歷險記</p>
        <p>16.釣魚遊戲</p>
        <p>17.好事多磨</p>
        <p>18.日冕的三原色</p>
        <p>19.在開滿鮮花的草地上</p>
        <p>20.一份信函</p>
        <p>21.卡特皮拉的故事．序章</p>
        <p>22.楓丹科學院，停滯於一片廢墟上</p>
        <p>23.海淵封纏的乖離光</p>
        <p>24.壞蛋們</p>
        <p>25.通往奇點之路</p>
        <p>26.我們的目標在另一條管道</p>
        <p>27.往事追跡</p>
        <p>28.智勇雙全</p>
        <p>29.水仙的追跡</p>
        <p>30.伊黎耶的野精靈</p>
        <p>31.問題美露莘與答案機器人</p>
        <p>32.無格律自由師</p>
        <p>33.一場預期內的謊言</p>
        <p>34.得償所願的尋寶之旅</p>
        <p>35.曙紅即興詩</p>
        <p>36.勒魯瓦</p>
        <p>37.諧律上的詠敘詩</p>
        <p>38.遲來的歸鄉</p>
        <p>39.他的生命在那邊</p>
    `,
};

const articles3 = {
    Mondstadt3: ` 
        <h3>Mondstadt 5-Star Role</h3>
        <p>Pyro：Diluc Noctua Chapter</p>
        <p>Pyro：Klee Trifolium Chapter</p>
        <p>Anemo：Jean Leo Minor Chapter</p>
        <p>Anemo：Venti Carmen Dei Chapter</p>
        <p>Hydro：Mona Astrolabos Chapter</p>
        <p>Geo：Albedo Princeps Cretaceus Chapter</p>
        <p>Cryo：Eula Aphros Delos Chapter</p>
    `,
    Liyue3: `
        <h3>Liyue 5-Star Role</h3>
        <p>Hydro：Tartaglia Monoceros Caeli Chapter</p>
        <p>Geo：Zhongli Historia Antiqua Chapter</p>
        <p>Cryo：Ganyu Sinae Unicornis Chapter</p>
        <p>Anemo：Xiao Alatus Chapter</p>
        <p>Pyro：Hu Tao Papilio Charontis Chapter</p>
        <p>Dendro：Baizhu Lagenaria Chapter</p>
        <p>Anemo：Xianyun Grus Serena Chapter</p>
    `,
    Inazuma3: ` 
        <h3>Inazuma 5-Star Role</h3>
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
        <h3>Sumeru 5-Star Role</h3>
        <p>Dendro：Tighnari Vulpes Zerda Chapter</p>
        <p>Hydro：Nilou Lotos Somno Chapter</p>
        <p>Electro：Cyno Lupus Aureus Chapter</p>
        <p>Dendro：Nahida Sapientia Oromasdis Chapter</p>
        <p>Dendro：Alhaitham Vultur Volans Chapter</p>
        <p>Pyro：Dehya Mantichora Chapter</p>
    `,
    Fontaine3: ` 
        <h3>Fontaine 5-Star Role</h3>
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
        <h3>Mondstadt 4-Star Role</h3>
        <p>火系：班尼特 第一幕 美妙旅程</p>
        <p>水系：芭芭拉 第一幕 治癒的清泉</p>
        <p>岩系：諾艾爾 第一幕 騎士修行之道</p>
        <p>岩系：諾艾爾 第二幕 騎士備考之道</p>
        <p>冰系：迪奧娜 第一幕 貓與特調酒</p>
        <p>冰系：凱亞 第一幕 鬼話與甜酒</p>
    `,
    Liyue4: `
        <h3>Liyue 4-Star Role</h3>
        <p>冰系：重雲 第一幕 尋妖覓邪記</p>
        <p>岩系：雲堇 第一幕 弦歌知雅意</p>
        <p>岩系：凝光 第一幕 玉閣歸客至</p>
    `,
    Inazuma4: ` 
        <h3>Inazuma 4-Star Role</h3>
        <p>火系：托馬 第一幕 家政官的日常工作</p>
        <p>風系：早柚 第一幕 嗚呼流．生長之術</p>
        <p>雷系：北斗 第一幕 南十字閃耀時</p>
        <p>岩系：五郎 第一幕 犬大將的特別行動</p>
        <p>雷系：九岐忍 第一幕 幫派的日常事務</p>
        <p>風系：鹿野院平藏 第一幕 風暴捕物帳</p>
    `,
    Sumeru4: ` 
        <h3>Sumeru 4-Star Role</h3>
        <p>草系：琺露珊 第一幕 難解之結</p>
        <p>冰系：萊依拉 第一幕 星本無言</p>
        <p>草系：卡維 第一幕 苦與幸的鐘擺</p>
    `,
    Fontaine4: ` 
        <h3>Fontaine 4-Star Role</h3>
        <p>風系：琳尼特 第一幕 貓與隨機數</p>
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
        RoleNameText1.innerText = '可莉'; 
        RoleNameText1.style.top = Klee.offsetTop - RoleNameText1.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText1.style.left = Klee.offsetLeft + RoleNameText1.offsetWidth + 10 + 'px';
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
        window.location.href = 'Klee.html'; 
    });
    Kokomi.addEventListener('mouseover', function() {
        RoleNameText2.style.display = 'block';
        RoleNameText2.innerText = '心海'; 
        RoleNameText2.style.top = Kokomi.offsetTop - RoleNameText2.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText2.style.left = Kokomi.offsetLeft + RoleNameText2.offsetWidth + 10 + 'px';
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
        window.location.href = 'Kokomi.html'; 
    });
    Hutao.addEventListener('mouseover', function() {
        RoleNameText3.style.display = 'block';
        RoleNameText3.innerText = '胡桃'; 
        RoleNameText3.style.top = Hutao.offsetTop - RoleNameText3.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText3.style.left = Hutao.offsetLeft + RoleNameText3.offsetWidth + 10 + 'px';
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
        window.location.href = 'Hutao.html'; 
    });
    Alhaitham.addEventListener('mouseover', function() {
        RoleNameText4.style.display = 'block';
        RoleNameText4.innerText = '海森'; 
        RoleNameText4.style.top = Alhaitham.offsetTop - RoleNameText4.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText4.style.left = Alhaitham.offsetLeft + RoleNameText4.offsetWidth + 10 + 'px';
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
        window.location.href = 'Alhaitham.html'; 
    });
    Neuvillette.addEventListener('mouseover', function() {
        RoleNameText5.style.display = 'block';
        RoleNameText5.innerText = '那維'; 
        RoleNameText5.style.top = Neuvillette.offsetTop - RoleNameText5.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText5.style.left = Neuvillette.offsetLeft + RoleNameText5.offsetWidth + 10 + 'px';
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
        window.location.href = 'Neuvillette.html'; 
    });
    Shenhe.addEventListener('mouseover', function() {
        RoleNameText6.style.display = 'block';
        RoleNameText6.innerText = '申鶴'; 
        RoleNameText6.style.top = Shenhe.offsetTop - RoleNameText6.offsetHeight - 10 + 'px'; // 调整文字方块的位置，向上偏移10px
        RoleNameText6.style.left = Shenhe.offsetLeft + RoleNameText6.offsetWidth + 10 + 'px';
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
        window.location.href = 'Shenhe.html'; 
    });
});