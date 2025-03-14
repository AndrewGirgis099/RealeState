var listItems = document.querySelectorAll('#paginationList li');

    // Initialize the second item color
    var secondAnchor = listItems[1].querySelector('a');
    secondAnchor.style.backgroundColor = '#8f735b';
    secondAnchor.style.color = '#fff';

    // Add click event listener to each list item
    listItems.forEach(function(item) {
        item.addEventListener('click', function() {
            // Remove background color and set text color for all <a> tags inside list items
            var anchorElements = item.parentElement.querySelectorAll('a');
            anchorElements.forEach(function(a) {
                a.style.backgroundColor = '';
                a.style.color = ''; // Reset text color
            });

            // Change background color and text color of <a> tag inside clicked list item
            var clickedAnchor = item.querySelector('a');
            clickedAnchor.style.backgroundColor = '#8f735b';
            clickedAnchor.style.color = '#fff';
        });
    });