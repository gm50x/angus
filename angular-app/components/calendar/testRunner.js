(function() {
    const jasmineEnv = jasmine.getEnv()
    jasmineEnv.updateInterval = 250

    const htmlReporter = new jasmine.HtmlReporter()
    jasmineEnv.addReporter(htmlReporter)

    jasmineEnv.specFilter = function(spec) {
        return htmlReporter.specFilter(spec)
    }

    const currentWindowOnload = window.onload
    window.onload = function() {
        if (currentWindowOnload) {
            currentWindowOnload()
        }
        document.querySelector('.version').innerHTML = jasmineEnv.versionString()
        execJasmine()
    }

    function execJasmine() {
        jasmineEnv.execute()
    }

})()