(function($) {
  'use strict';

  let userData;

  /**
   * Make an AJAX request to users.json.
   */
  $.ajax('users.json', {
    success: (data, status, jqXHR) => renderUsers(data),
    error: (jqXHR, status, error) => {
      console.log(jqXHR, status, error);
    },
    dataFilter: (data, type) => {
      const users = JSON.parse(data);

      let withAddress, withoutAddress;

      withAddress = users.filter(user => user.address);
      withoutAddress = users.filter(user => !user.address);

      return JSON.stringify(withAddress.concat(withoutAddress));
    }
  });

  /**
   * Render the user name and email address.
   *
   * @param {array} data The array of user data.
   */
  function renderUsers(data) {
    userData = data;
    const users = $('.users');

    data.forEach(user => {
      const $user = $('<div>').addClass('user'),
        $name = $('<h2>').addClass('name'),
        $email = $('<a>')
          .addClass('email')
          .attr('href', user.email);

      if (user.address) {
        $user.addClass('has-address');
      }

      $name.text(user.name).appendTo($user);
      $email.text(user.email).appendTo($user);

      $user.appendTo(users);
    });
  }

  /**
   * Select the user to maybe get more detail?
   *
   * @param {object} event The event object.
   */
  function selectUser(event) {
    const target = event.target.closest('.user'),
      $users = $('.users');

    $('.user').removeClass('selected');
    $(target).addClass('selected');
    $users.trigger('get:data', target);
  }

  // Listen for custom event.
  $('.users').on('get:data', (event, target) => {
    const index = $('.user').index(target),
      $details = $('<div>').addClass('user-detail'),
      $container = $('.user-details'),
      $button = $('<button>')
        .attr('type', 'button')
        .text('Clear')
        .addClass('clear-selection'),
      $name = $('<h2>')
        .addClass('user-name')
        .text(userData[index].name),
      $email = $('<a>')
        .attr('href', userData[index].email)
        .text(userData[index].email),
      $phone = $('<a>')
        .attr('href', 'tel:' + userData[index].phone)
        .text(userData[index].phone),
      $address = $('<address>'),
      $website = $('<a>');

    $container.children().remove();

    $name.appendTo($details);
    $email.appendTo($details);
    $phone.appendTo($details);

    if (userData[index].address) {
      $address.html(
        userData[index].address.street +
          '<br>' +
          userData[index].address.suite +
          '<br>' +
          userData[index].address.city +
          '<br>' +
          userData[index].address.zipcode
      );

      $address.appendTo($details);
    }

    if (userData[index].website) {
      $website
        .attr('href', userData[index].website)
        .text(userData[index].website);

      $website.appendTo($details);
    }

    $details.appendTo($container);
    $button.appendTo($container);
    $container.addClass('has-data');
    $button.trigger('clear:selection');
  });

  // Listen for clicks on user.
  $('.users').on('click', $('.user'), selectUser);

  $('.user-details').on('click', $('.clear-selection'), event => {
    if (!$(event.target).hasClass('clear-selection')) {
      return null;
    }

    $('.user-details')
      .removeClass('has-data')
      .children()
      .remove();

    $('.user').removeClass('selected');
  });
})(jQuery);
