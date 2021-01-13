d = '''
				<td id="Town">　　　&nbsp;&nbsp;&nbsp;登記數<br>　　　&nbsp;&nbsp;---------<br><a class="Link1" town="W01">鹽埕區</a>&nbsp;&nbsp;  2174<br><a class="Link1" town="W02">鼓山區</a>&nbsp;&nbsp; 17798<br><a class="Link1" town="W03">左營區</a>&nbsp;&nbsp; 14905<br><a class="Link1" town="W04">楠梓區</a>&nbsp;&nbsp; 14823<br><a class="Link1" town="W05">三民區</a>&nbsp;&nbsp; 26149<br><a class="Link1" town="W06">新興區</a>&nbsp;&nbsp;  4225<br><a class="Link1" town="W07">前金區</a>&nbsp;&nbsp;  2723<br><a class="Link1" town="W08">苓雅區</a>&nbsp;&nbsp; 19202<br><a class="Link1" town="W09">前鎮區</a>&nbsp;&nbsp; 12529<br><a class="Link1" town="W10">旗津區</a>&nbsp;&nbsp;  1748<br><a class="Link1" town="W11">小港區</a>&nbsp;&nbsp;  9854<br><a class="Link1" town="W12">鳳山區</a>&nbsp;&nbsp; 27738<br><a class="Link1" town="W13">林園區</a>&nbsp;&nbsp;  5937<br><a class="Link1" town="W14">大寮區</a>&nbsp;&nbsp; 14598<br><a class="Link1" town="W15">大樹區</a>&nbsp;&nbsp;  3657<br><a class="Link1" town="W16">大社區</a>&nbsp;&nbsp;  2669<br><a class="Link1" town="W17">仁武區</a>&nbsp;&nbsp;  8147<br><a class="Link1" town="W18">鳥松區</a>&nbsp;&nbsp;  4233<br><a class="Link1" town="W19">岡山區</a>&nbsp;&nbsp; 10708<br><a class="Link1" town="W20">橋頭區</a>&nbsp;&nbsp;  3377<br><a class="Link1" town="W21">燕巢區</a>&nbsp;&nbsp;  2850<br><a class="Link1" town="W22">田寮區</a>&nbsp;&nbsp;  1108<br><a class="Link1" town="W23">阿蓮區</a>&nbsp;&nbsp;  2544<br><a class="Link1" town="W24">路竹區</a>&nbsp;&nbsp;  2712<br><a class="Link1" town="W25">湖內區</a>&nbsp;&nbsp;  2029<br><a class="Link1" town="W26">茄萣區</a>&nbsp;&nbsp;  1582<br><a class="Link1" town="W27">永安區</a>&nbsp;&nbsp;  1204<br><a class="Link1" town="W28">彌陀區</a>&nbsp;&nbsp;  1136<br><a class="Link1" town="W29">梓官區</a>&nbsp;&nbsp;  2217<br><a class="Link1" town="W30">旗山區</a>&nbsp;&nbsp;  3286<br><a class="Link1" town="W31">美濃區</a>&nbsp;&nbsp;  4359<br><a class="Link1" town="W32">六龜區</a>&nbsp;&nbsp;  1834<br><a class="Link1" town="W33">甲仙區</a>&nbsp;&nbsp;  1117<br><a class="Link1" town="W34">杉林區</a>&nbsp;&nbsp;  1621<br><a class="Link1" town="W35">內門區</a>&nbsp;&nbsp;  2718<br><a class="Link1" town="W36">茂林區</a>&nbsp;&nbsp;   &nbsp;482<br><a class="Link1" town="W37">桃源區</a>&nbsp;&nbsp;   &nbsp;881<br><a class="Link1" town="W38">那瑪夏</a>&nbsp;&nbsp;   &nbsp;924<br>　　　&nbsp;&nbsp;---------<br>&nbsp;&nbsp;合計：241798<br></td>

'''
 

d2 = '''
				<td id="TownA"> &nbsp;&nbsp;戶數<br>---------<br>  1015<br>  6054<br>  8379<br>  7703<br> 13231<br>  2069<br>  1173<br>  6440<br>  6724<br>   &nbsp;973<br>  5635<br> 13309<br>  2479<br>  4116<br>  1436<br>  1404<br>  4054<br>  1968<br>  3554<br>  1819<br>  1409<br>   &nbsp;371<br>  1164<br>  1471<br>  1028<br>   &nbsp;867<br>   &nbsp;556<br>   &nbsp;655<br>  1301<br>  1511<br>  1766<br>   &nbsp;806<br>   &nbsp;446<br>   &nbsp;689<br>   &nbsp;697<br>   &nbsp;193<br>   &nbsp;327<br>   &nbsp;267<br>---------<br>109059<br></td>
'''

d3 ='''

['登記數', '---------', '鹽埕區', '2174', '鼓山區', '17798', '左營區', '14905', '楠梓區', '14823', '三民區', '26149', '新興區', '4225', '前金區', '2723', '苓雅區', '19202', '前鎮區', '12529', '旗津區', '1748', '小港區', '9854', '鳳山區', '27738', '林園區', '5937', '大寮區', '14598', '大樹區', '3657', '大社區', '2669', '仁武區', '8147', '鳥松區', '4233', '岡山區', '10708', '橋頭區', '3377', '燕巢區', '2850', '田寮區', '1108', '阿蓮區', '2544', '路竹區', '2712', '湖內區', '2029', '茄萣區', '1582', '永安區', '1204', '彌陀區', '1136', '梓官區', '2217', '旗山區', '3286', '美濃區', '4359', '六龜區', '1834', '甲仙區', '1117', '杉林區', '1621', '內門區', '2718', '茂林區', '482', '桃源區', '881', '那瑪夏', '924', '---------', '合計：241798']
'''

def reg_val():
    import re
    p = r'\d+'
    y = re.findall(p,d)
    print('reg=',y)
    
def town_():
    from bs4 import BeautifulSoup
    sp = BeautifulSoup(d,'html.parser')
    x = sp.find("td")
    print([s for s in x.stripped_strings])#會自動去掉空白字符串
    
    #資料另儲字串盒
    import re
    p = r'\d+'
    y = re.findall(p,d3)
    print('reg=',y)
    print(len(y))
   

def cities():
    from bs4 import BeautifulSoup
    sp = BeautifulSoup(d,'html.parser')
    x = sp.find_all("a")
    
    I=[]
    for i in x:
        I.append(i.text)
    print("cities=",I,end=',')
    
def hur_val():
        from bs4 import BeautifulSoup
        sp = BeautifulSoup(d2,'html.parser')
        x = sp.find("td")
        print("hur=",[s for s in x.stripped_strings])#會自動去掉空白字符串
reg_val()
town_()
cities()        
hur_val()       
