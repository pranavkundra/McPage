$(function() {
                $.material.init();
                $(".shor").noUiSlider({
                    start: 40,
                    connect: "lower",
                    range: {
                        min: 0,
                        max: 100
                    }
                });

                $(".svert").noUiSlider({
                    orientation: "vertical",
                    start: 40,
                    connect: "lower",
                    range: {
                        min: 0,
                        max: 100
                    }
                });
            });

(function(){

                var $button = $("<div id='source-button' class='btn btn-primary btn-xs'>&lt; &gt;</div>").click(function(){
                    var index =  $('.bs-component').index( $(this).parent() );
                    $.get(window.location.href, function(data){
                        var html = $(data).find('.bs-component').eq(index).html();
                        html = cleanSource(html);
                        $("#source-modal pre").text(html);
                        $("#source-modal").modal();
                    })

                });

                $('.bs-component [data-toggle="popover"]').popover();
                $('.bs-component [data-toggle="tooltip"]').tooltip();

                $(".bs-component").hover(function(){
                    $(this).append($button);
                    $button.show();
                }, function(){
                    $button.hide();
                });

                function cleanSource(html) {
                    var lines = html.split(/\n/);

                    lines.shift();
                    lines.splice(-1, 1);

                    var indentSize = lines[0].length - lines[0].trim().length,
                        re = new RegExp(" {" + indentSize + "}");

                    lines = lines.map(function(line){
                        if (line.match(re)) {
                            line = line.substring(indentSize);
                        }

                        return line;
                    });

                    lines = lines.join("\n");

                    return lines;
                }

                $(".icons-material .icon").each(function() {
                    $(this).after("<br><br><code>" + $(this).attr("class").replace("icon ", "") + "</code>");
                });

            })();