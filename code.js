var homeContent = `<div class="container">
        <img class = "mainLogo" src="lib/assets/logo.png" alt="">
        <p class="missionStatement">Shark Bait goes beyond your typical restaurant meetup for investors and investees, business meetings, and beyond. We make
        sure that investees have the best possible chance of getting their pitch invested in; through world class foods customized
        to each person and various amenities that help investees to catch their ‘shark’.</p>
        <p class ="tagline">We'll do the rest, so pitch your best!</p>
    </div><!-- end content container -->`;
var servicesContent = `<div class="container">
        <p class="serviceDescription">This business will provide food and drink for the interested CEOs. This business will partner with local food distributors
        in order to get food materials and for the televisions screens we will partner with technology companies that provide
        cost effective yet high quality products. Those helping with technology need to have a good background in the technological
        studies, those hired in the cooking department or serving department need to have backgrounds in restaurants. Our
        business will provide hospitality and food to CEOs in order to make them feel comfortable and relax them so that
        they do not feel as if they only want to go home and not listen to our customer’s ideas. The week will be the days
        where customers are able to sign up for rooms and time slots for our 20 available rooms in a small building of three
        floors. Each time slot will be an hour, expectations could apply for the CEOs who need more convincing, like after
        a full 24 hour day of work. We are a special business in that we will focus solely on the CEO and his comfortability.
        This will make the CEO more likely to listen fully and pay more attention to the ideas being pitched to them.</p>
    </div>`;
var contactContent = `<div class="container">
        <p class="contactUs">Visit us at: P. Sherman 42 Wallaby Way Sydney<br> Email us at: Sharkbait@hoohaha.com <br> 1(800)-222-4899 <br> Or call anyone one of us at: <br> Sara Almodovar (347) 657-6984 <br> Abhishek Ramjit (347)
        648-9822 <br> Bryant Tufino-Flores (567) 648-3360</p>
    </div>`;
var reserveContent = `<div class="container">
        <div class="col-md-4"></div>
        <div class="col-md-4">
            <div class="form-group">
                <label class="describeInput"for="exampleInputEmail1">Please Fill out this form to make a reservation</label>
                <input class="form-control" placeholder="Your Name">
                <input class="form-control" placeholder="Number of Investors">
                <input class="form-control" placeholder="Would you like to have your investors researched? Yes or No">
                <input class="form-control" placeholder="Preferred time of day">
                <input class="form-control" placeholder="Preferred Date MM/DD/YYYY">
                <input class="form-control" placeholder="Room Type: Private, Standard, or Large suite">
                <p>Private rooms seat 4 people maximum, Standard is a normal restaurant floor, and large suites seat 100 people maximum</p>
                <input class="form-control" placeholder="Brief overview of your pitch">
                <input class="btn submit btn-default" type="submit" value="Submit">
            </div><!-- end form -->
        </div>
        <div class="col-md-4"></div>
    </div> `;
function renderContent(content){
    $('.container').replaceWith(content);
}
function clickHandler(target,content){
    $(target).on('click',function(){
        renderContent(content);
    })
}
function handleContent(){
    renderContent(homeContent);
    clickHandler('.clickHome',homeContent);
    clickHandler('.clickServices',servicesContent);
    clickHandler('.clickContact',contactContent);
    clickHandler('.clickReserve',reserveContent);
}
$(handleContent);