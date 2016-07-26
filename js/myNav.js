/* myNav.js */

function i(x) {
    'use strict';
    return document.getElementById(x);
}

function writeNav(page) {
    'use strict';
    var outNav = '',
        dropNav = i('myNav');
    outNav += '<nav class="bg-primary" id="mainnavbar">';
//    outNav += '<nav class="navbar navbar-default navbar-fixed-bottom bg-primary" id="mainnavbar">';
    outNav += '<div class="container-fluid">';
    outNav += '<div class="navbar-header">';
    outNav += '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">';
    outNav += '<span class="sr-only">Toggle navigation</span>';
    outNav += '<span class="icon-bar"></span>';
    outNav += '<span class="icon-bar"></span>';
    outNav += '<span class="icon-bar"></span>';
    outNav += '</button>';
    outNav += '<a class="navbar-brand" href="index.html"><img alt="ERGOAnalysis Small Logo" src="images/ERGOAnalysisLogo0717.png" width="64" height="24"></a>';
    outNav += '</div>';
    outNav += '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">';
    outNav += '<ul class="nav navbar-nav">';
    if (page === 1) {
        outNav += '<li class="active">';
    } else {
        outNav += '<li class="default">';
    }
    outNav += '<a href="sites.html">Sites</a></li>';
    if (page === 2) {
        outNav += '<li class="active">';
    } else {
        outNav += '<li class="default">';
    }
    outNav += '<a href="jobs.html">Jobs</a></li>';
    if (page === 3) {
        outNav += '<li class="active">';
    } else {
        outNav += '<li class="default">';
    }
    outNav += '<a href="camera.html">Camera</a></li>';
    outNav += '<li class="dropdown">';
    outNav += '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Assets <span class="caret"></span></a>';
    outNav += '<ul class="dropdown-menu">';
    outNav += '<li><a href="videos.html">Videos</a></li>';
    outNav += '<li role="separator" class="divider"></li>';
    outNav += '<li><a href="pictures.html">Pictures</a></li>';
    outNav += '</ul>';
    outNav += '</li>';
    outNav += '<li class="dropdown">';
    outNav += '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Summary <span class="caret"></span></a>';
    outNav += '<ul class="dropdown-menu">';
    outNav += '<li><a href="review.html">Site Review</a></li>';
    outNav += '<li role="separator" class="divider"></li>';
    outNav += '<li><a href="reports.html">Site Reports</a></li>';
    outNav += '</ul>';
    outNav += '</li>';
    outNav += '</ul>';
    outNav += '<form class="navbar-form navbar-right" role="search">';
    outNav += '<div class="form-group">';
    outNav += '<input type="text" class="form-control" placeholder="Search">';
    outNav += '</div>';
    outNav += '<button type="submit" class="btn btn-default">Submit</button>';
    outNav += '</form>';
    outNav += '</div><!-- /.navbar-collapse -->';
    outNav += '</div><!-- /.container-fluid -->';
    outNav += '</nav>';
    dropNav.innerHTML = outNav;
}

















