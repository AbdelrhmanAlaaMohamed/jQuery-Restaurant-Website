let rest = {
    init() {
      rest.config = {
        active: 'home',
        $main: $('main'),
        $nav: $('#nav'),
        home: rest.genHome(),
        contact: rest.genContact(),
        menu: rest.genMenu()
      }
      rest.setup();
    },
    setup() {
      let config = rest.config;
      let $main = config.$main;
      $main.append(config.home)
        config.$nav.on('click', (event) => {
            let id = event.target.id;
            if (id !== config.active && id !== 'nav') {
                $main.children('section:nth-child(2)').detach();
                config.active = id;
                $main.append(config[id]);	
              }
            });
          },

    genRow(len) {
        let row = ['<div class=\'rest-row\'>'];
        for (i = 0; i < len; i = i + 1) {
          row.push('<div class=\'restor rester\'><div class=\'init\'></div></div>');
        }
    
        row.push('</div>');
        return row.join('');
      },

    genHome() {
        let $home = $('<section id=\'home-page\'></section>');
        let $grid = $('<div id=\'rest-grid\'></div>');
        let content = ['<img src=\'images/food.jpg\' alt=\'food\'>', 
                    '<img src=\'images/food1.png\' alt=\'food\'>', 
                    '<img src=\'images/food2.png\' alt=\'food\'>',
                    '<img src=\'images/food3.png\' alt=\'food\'>', 
                    '<img src=\'images/food4.png\' alt=\'food\'>'];
        
        let $firstRow = $(rest.genRow(2));
        let $secondRow = $(rest.genRow(3));
        let $thirdRow = $(rest.genRow(2));

        $firstRow.add($thirdRow).addClass('odd');
        $secondRow.children().eq(1).attr('id', 'about');
        $grid
        .append($firstRow)
        .append($secondRow)
        .append($thirdRow);

        $grid.find('.init').html(function(index, oldHtml) {
            $(this).html(content[index]);
        });

        $home.append($grid);
        return $home;
    },

    genContact() {
        return $('<section id=\'contact-page\' class=\'menu\'>' +
        '<h2>Contact</h2><p>Phone us: (+20)0000000000000000</p>' +
        '<p>Email us: Restaurant@gmail.com</p></section>');
    },

    genMenu() {
        return $('<section id=\'menu-page\' class=\'menu\'>' +
            '<h2>Menu</h2><table><tbody>' +
            '<tr><td>Lorem ipsum</td><td>$17</td></tr>' +
            '<tr><td>Lorem ipsum</td><td>$20</td></tr>' +
            '<tr><td>Lorem ipsum</td><td>$9</td></tr>' +
            '<tr><td>Lorem ipsum</td><td>$10</td></tr>' +
            '<tr><td>Lorem ipsum</td><td>$11</td></tr>' +
            '<tr><td>Lorem ipsum</td><td>$13</td></tr>' +
            '</tbody></table></section>');
    }
};

$(() => {
    rest.init();
});