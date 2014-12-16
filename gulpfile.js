var gulp      = require('gulp'),
    $         = require("gulp-load-plugins")(),
    express   = require('express'),
    path      = require('path'),
    tinylr    = require('tiny-lr'),
    app       = express(),
    server    = tinylr(),
    deploy    = require('gulp-gh-pages'),
    psi       = require('psi'),
    fs        = require('fs'),
    moment    = require('moment'),
    mkdirp = require('mkdirp'),
    cssshrink = require('gulp-cssshrink'),
    minifyCSS = require('gulp-minify-css'),
    psisite = 'http://irondom.github.io/ironDOM-class-module/';

var year = moment().get('year'),
  month = moment().get('month'),
  day = moment().get('date'),
  hour = moment().get('hour'),
  minute = moment().get('minute'),
  second = moment().get('second'),
  fullDate = year + '-' + month + '-' + day + '-T' + hour + '-' + minute + '-' + second;

gulp.task('speed-mobile', function (cb) {
  var options = {
    // key: key,
    nokey: 'true',
    url: psisite,
    strategy: 'mobile'
  };

  psi(options, function (err, data) {
    var perfContent =
      '# Peformance results of '+ fullDate +': \n' +
      ' \n' +
      '- Url: ' + data.id + '\n' +
      '- Score: ' + data.score + '\n' +
      '\n' +
      '## Page stats: \n' +
      '- Number Resources: ' + data.pageStats.numberResources + '\n' +
      '- Total Request Bytes: ' + data.pageStats.totalRequestBytes + '\n' +
      '- Number Static Resources: ' + data.pageStats.numberStaticResources + '\n' +
      '- HTML Response Bytes: ' + data.pageStats.htmlResponseBytes + ' bytes \n' +
      '- CSS Response Bytes: ' + data.pageStats.cssResponseBytes + ' bytes \n' +
      '- JavaScript Response Bytes: ' + data.pageStats.javascriptResponseBytes + ' bytes \n' +
      '- Number JavaScript Resources: ' + data.pageStats.numberJsResources + '\n' +
      '- Number CSS Resources: ' + data.pageStats.numberCssResources + '\n'+
      '- Avoid Landing Page Redirects: ' + JSON.stringify(data.formattedResults.ruleResults.AvoidLandingPageRedirects.ruleImpact) + '\n' +
      '- Enable Gzip Compression: ' + JSON.stringify(data.formattedResults.ruleResults.EnableGzipCompression.ruleImpact) + '\n' +
      '- Leverage Browser Caching: ' + JSON.stringify(data.formattedResults.ruleResults.LeverageBrowserCaching.ruleImpact) + '\n' +
      '- Main Resource Server Response Time: ' + JSON.stringify(data.formattedResults.ruleResults.MainResourceServerResponseTime.ruleImpact) + '\n' +
      '- Minify CSS: ' + JSON.stringify(data.formattedResults.ruleResults.MinifyCss.ruleImpact) + '\n' +
      '- Minify HTML: ' + JSON.stringify(data.formattedResults.ruleResults.MinifyHTML.ruleImpact) + '\n' +
      '- Minify JavaScript: ' + JSON.stringify(data.formattedResults.ruleResults.MinifyJavaScript.ruleImpact) + '\n' +
      '- MinimizeRenderBlockingResources: ' + JSON.stringify(data.formattedResults.ruleResults.MinimizeRenderBlockingResources.ruleImpact) + '\n' +
      '- Optimize Images: ' + JSON.stringify(data.formattedResults.ruleResults.OptimizeImages.ruleImpact) + '\n' +
      '- Prioritize Visible Content: ' + JSON.stringify(data.formattedResults.ruleResults.PrioritizeVisibleContent.ruleImpact) + '\n';

    //console.log(data.formattedResults.ruleResults.PrioritizeVisibleContent);
    mkdirp('performance-reports/mobile/', function (err) {
      if (err) {
        console.error(err)
      } else {
        fs.writeFile('performance-reports/mobile/test-mobile-' + fullDate + '.md', perfContent);
        console.log('You can find the report: performance-reports/mobile/test-mobile-' + fullDate + '.md');
      }
    });

    //console.log(data);
  });
});


gulp.task('speed-desktop', function (cb) {
  var options = {
    // key: key,
    nokey: 'true',
    url: psisite,
    strategy: 'desktop'
  };

  psi(options, function (err, data) {
    var perfContent =
      '# Peformance results of '+ fullDate +': \n' +
      ' \n' +
      '- Url: ' + data.id + '\n' +
      '- Score: ' + data.score + '\n' +
      '\n' +
      '## Page stats: \n' +
      '- Number Resources: ' + data.pageStats.numberResources + '\n' +
      '- Total Request Bytes: ' + data.pageStats.totalRequestBytes + '\n' +
      '- Number Static Resources: ' + data.pageStats.numberStaticResources + '\n' +
      '- HTML Response Bytes: ' + data.pageStats.htmlResponseBytes + ' bytes \n' +
      '- CSS Response Bytes: ' + data.pageStats.cssResponseBytes + ' bytes \n' +
      '- JavaScript Response Bytes: ' + data.pageStats.javascriptResponseBytes + ' bytes \n' +
      '- Number JavaScript Resources: ' + data.pageStats.numberJsResources + '\n' +
      '- Number CSS Resources: ' + data.pageStats.numberCssResources + '\n'+
      '- Avoid Landing Page Redirects: ' + JSON.stringify(data.formattedResults.ruleResults.AvoidLandingPageRedirects.ruleImpact) + '\n' +
      '- Enable Gzip Compression: ' + JSON.stringify(data.formattedResults.ruleResults.EnableGzipCompression.ruleImpact) + '\n' +
      '- Leverage Browser Caching: ' + JSON.stringify(data.formattedResults.ruleResults.LeverageBrowserCaching.ruleImpact) + '\n' +
      '- Main Resource Server Response Time: ' + JSON.stringify(data.formattedResults.ruleResults.MainResourceServerResponseTime.ruleImpact) + '\n' +
      '- Minify CSS: ' + JSON.stringify(data.formattedResults.ruleResults.MinifyCss.ruleImpact) + '\n' +
      '- Minify HTML: ' + JSON.stringify(data.formattedResults.ruleResults.MinifyHTML.ruleImpact) + '\n' +
      '- Minify JavaScript: ' + JSON.stringify(data.formattedResults.ruleResults.MinifyJavaScript.ruleImpact) + '\n' +
      '- MinimizeRenderBlockingResources: ' + JSON.stringify(data.formattedResults.ruleResults.MinimizeRenderBlockingResources.ruleImpact) + '\n' +
      '- Optimize Images: ' + JSON.stringify(data.formattedResults.ruleResults.OptimizeImages.ruleImpact) + '\n' +
      '- Prioritize Visible Content: ' + JSON.stringify(data.formattedResults.ruleResults.PrioritizeVisibleContent.ruleImpact) + '\n';

    mkdirp('performance-reports/desktop/', function (err) {
      if (err) {
        console.error(err)
      } else {
        fs.writeFile('performance-reports/desktop/test-desktop-' + fullDate + '.md', perfContent);
        console.log('You can find the report: performance-reports/desktop/test-desktop-' + fullDate + '.md');
      }
    });

    //console.log(data);
  });
});

gulp.task('compass', function() {
    gulp.src('./src/stylesheets/**/*.scss')
        .pipe($.plumber())
        .pipe($.compass({
            css: 'dist/stylesheets',
            sass: 'src/stylesheets'
        }))
        .pipe(cssshrink())
        .pipe(gulp.dest('dist/stylesheets'))
        .pipe( $.livereload( server ));
});

gulp.task('jslib', function() {
  return gulp.src('src/scripts/*.js')
    .pipe($.concat("irondom.js"))
    .pipe(gulp.dest('dist/scripts'))
    .pipe( $.livereload( server ) );
});

gulp.task('js', function() {
  return gulp.src('src/test/*.js')
    .pipe($.concat("test.js"))
    .pipe(gulp.dest('dist/scripts'))
    .pipe( $.livereload( server ) );
});

gulp.task('images', function() {
  return gulp.src('./src/images/*')
    .pipe(gulp.dest('./dist/images'))
    .pipe( $.livereload( server ));
})

gulp.task('templates', function() {
  return gulp.src('src/*.jade')
    .pipe($.plumber())
    .pipe($.jade({
      pretty: true
    }))
    .pipe( gulp.dest('dist/') )
    .pipe( $.livereload( server ));
});

gulp.task('express', function() {
  app.use(express.static(path.resolve('./dist')));
  app.listen(1337);
  $.util.log('Listening on port: 1337');
});

gulp.task('watch', function () {
  server.listen(35729, function (err) {
    if (err) {
      return console.log(err);
    }

    gulp.watch('src/stylesheets/**/*.scss',['compass']);

    gulp.watch('src/scripts/**/*.js',['jslib']);

    gulp.watch('src/test/**/*.js',['js']);

    gulp.watch('src/*.jade',['templates']);

  });
});


// Default Task
gulp.task('default', ['jslib', 'js','compass','templates', 'images', 'express','watch']);

gulp.task('perf', ['speed-desktop', 'speed-mobile']);

