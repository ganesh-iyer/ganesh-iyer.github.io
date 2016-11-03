---
layout: project
title: ATP Tennis Player Comparisons
permalink: /projects/tennis/
---


<div class = "key-insight">
<h3 class = "key-insight">Key Insight</h3>
An effective way to come up with innovative visualizations is to sketch visual elements on paper, mock them up on a software like Sketch or Illustrator recreating different data scenarios and then iteratively testing them. In my internship later that summer, I reused this approach to good effect.
</div>
<br />

![ATP Tennis Player Comparisons - Screenshot of the final website built for the project]({{ site.baseurl}}/projects/tennis/tennis-hifi.png)
<span class = "figure-description">
**Fig:** A layout showing how the unit charts work together to convey tournament performance and odds across rounds.
</span><br /><br />

**Brief:** Visualize a history of performance and betting data in the field of Men’s tennis and allow users to explore interesting trends and stories behind the numbers. Specifically, we sought to design innovative ways to bridge two kinds of information - *what was predicted to happen on the court* and *what actually happened*.

**Platform:** Web interface that contained visualizations built using Tableau and d3.

**Project Resources:** <a href="http://pitan.hu/info247-final/" class="underlined-link" target= "blank">
Website
<span class="fa fa-external-link no-underline"></span></a> and <a href="http://courses.ischool.berkeley.edu/i247/s16/reports/tenniscomparison.pdf" class="underlined-link" target= "blank">
Detailed Report
<span class="fa fa-external-link no-underline"></span></a>.

**Project Background:** While performance and betting data for Men's tennis were readily available, we (team of 3) did not feel that there were enough visualizations bringing those two types of information together into a common story.

Performance graphs were usually bar or line graphs tracking wins or changes in ranking over time - and these were the most straightforward and intuitive ways to represent such data. The data representing betting odds for each Grand Slam (Australian Open, French Open, Wimbledon and US Open) from 2007 to 2015 however was not in a format that can readily be consumed by a lay tennis enthusiast.<br />

The model available in the
<a href="http://tennis-data.co.uk/alldata.php" class="underlined-link" target= "blank">
dataset
<span class="fa fa-external-link no-underline"></span></a>
was in the form of ratios relative to 1. These ratios were intentionally designed to indicate how much the placer of a bet would win or lose depending on the result. Higher ratios pointed to higher unlikelihood of the result. This model however, needed further cognitive processing for a non-seasoned bookie to understand who is more *favored* to win a particular match. To do this, the design has to answer what kind of information about the dataset should the visual representation answer. Hence, we transformed the cumbersome question *'How much am I going to win if Player A wins?'* to *'How much likely do bookies think Player A is going to win?'*.

![ATP Tennis Player Comparisons - Early Sketches]({{ site.baseurl}}/projects/tennis/tennis-presketch.png)
<span class = "figure-description">
**Fig:** Early paper explorations of visualizations of performance and betting information
</span><br /><br />

![ATP Tennis Player Comparisons - Sketching the unit chart]({{ site.baseurl}}/projects/tennis/tennis-sketch.png)
<span class = "figure-description">
**Fig:** Conceptualizing the unit chart
</span><br /><br />

**Process:** For a greater breadth of exploration, we first curtailed our dataset. We focused our attention only on bets that predicted the match winner.<br />

Based on our necessity to clean and transform the betting data, we used
<a href="http://www.openrefine.org" class="underlined-link" target= "blank">
OpenRefine
<span class="fa fa-external-link no-underline"></span></a> to convert betting odds in favor of a player to the predicted probability (percentage) of his winning the match.<br />

My hypothesis was that if data for an entire match could be encoded in a single simple chart, it could then be reused for all matches. The challenges with these were mainly twofold - a design challenge on making the charts simple and generic so that they hold good for all types of matches and a visualization challenge where you convey both result and predicted result in the same simple chart; this also meant conveying the notion of an 'upset', that a player won the match despite being less favored.

For this purpose, we designed the unit chart as follows. The unit chart also lent itself conveniently to a representation of the averages of betting results (summary charts) and using the representations for playing surfaces, we supplemented the summarized data through stacked bar charts.<br />

![ATP Tennis Player Comparisons - Breaking down the Unit Chart]({{ site.baseurl}}/projects/tennis/tennis-unitchart.png)
<span class = "figure-description">
**Fig:** Breaking down the Unit Chart. This is the final version that was the outcome of sketching and iterative testing.
</span><br /><br />

![ATP Tennis Player Comparisons - Gestalt layers]({{ site.baseurl}}/projects/tennis/tennis-gestalt.png)
<span class = "figure-description">
**Fig:** Gestalt laws applied to the visualization to narrate the story in layers.
</span><br /><br />

But what does 'less favored' mean? Is a 40% predicted chance of winning combined with a victory a shocking enough result? This informed that the interface would be better served as a tool for explorative data analysis where the users decide an 'upset threshold' in a search filter and then easily find upsets. Our data-driven and development-validated process and the resulting flow of design decisions can be summed up below.

![ATP Tennis Player Comparisons - Process Overview]({{ site.baseurl}}/projects/tennis/tennis-process.png)
<span class = "figure-description">
**Fig:** Process overview of design decisions between data, design and development.
</span><br /><br />

![ATP Tennis Player Comparisons - Search Filters]({{ site.baseurl}}/projects/tennis/tennis-filters.png)
<span class = "figure-description">
**Fig:** Search filters that was incorporated to help users explore data.
</span><br /><br />

This exploration also raised more interesting questions - which player is more likely to cause an upset? Which player is more likely to cause an upset against a specific player despite the differences in rankings? In the latter question, how do player v/s player predictions vary - surface, playing styles, progress in the tournament and over time once it is known that a Wawrinka has a history of upsets against a Federer, for example? While these questions remained out of scope for our visualization, our aim was to build a coherent story to be able to ask these questions in the first place.

We thus included two types of explorations - player v all opponents and player v a specific opponent. In the latter, it was through the design of the unit chart that we unearthed another story - the round of the tournament that the players clashed in.

![ATP Tennis Player Comparisons - Player v all opponents (wireframe)]({{ site.baseurl}}/projects/tennis/tennis-wireframe.png)
<span class = "figure-description">
**Fig:** Wireframing with the beta version of the chart (upside down) and how the stories could potentially be constructed.
</span><br /><br />

![ATP Tennis Player Comparisons - Player v all opponents]({{ site.baseurl}}/projects/tennis/tennis-allopps.png)
<span class = "figure-description">
**Fig:** Visualizing Roger Federer's record against all opponents including all upsets.
</span><br /><br />

![ATP Tennis Player Comparisons - Player v one specific opponent]({{ site.baseurl}}/projects/tennis/tennis-oneopp.png)
<span class = "figure-description">
**Fig:** Visualizing Roger Federer's record against Novak Djokovic including upsets where either player caused the upset.
</span><br /><br />

**Responsibilities:**

* As the design lead for the project, I sketched out visualization concepts, used Illustrator to detail them out as wireframes and also designed and coded the front-end UI elements like tabs, headers, etc. that housed the charts.

* I initially explored the data to map common patterns that I then translated to sketches and Illustrator wireframes. The concept of the unit chart came from such explorations.

* I also tested out the efficacy of the unit charts by presenting variations of the unit chart to different users.


![ATP Tennis Player Comparisons - Variations of the chart that were tested on paper with different users]({{ site.baseurl}}/projects/tennis/tennis-testing.png)
<span class = "figure-description">
**Fig:** Variations (stroke, transparency, order etc.) of the unit chart that were printed and tested with users for its efficacy.
</span><br /><br />


**Other Insights:**

* Seeing as even odds in favor of the perceived overwhelming favorite drops in the games they lose, this indicates that the data contains in-play betting - that upto a certain point in a match, odds in favor of a player can change.

* Using Gestalt Laws at different view layers can enable a drastic transformation of commonplace visual representations like bar charts that can then tell a different story at each layer.

* To decide scope of data is an acquired skill. This becomes even more important in a project where you are exploring new representations. By focusing more on an optimally sized dataset, it became possible to explore the data in greater visual breadth and in the end we were able to create a representation that can be transposed to Women's tennis or even other sports!

* Annotations on Tableau makes Tree maps versatile by making bird's eye level insights easily visible.
<br /><br />

**Instructor Feedback:**

> You did an amazing job with the implementation of the betting interface! I appreciate that you did some paper prototyping and testing, and that you also did some evaluating during the showcase. Overall, the design is quite powerful, but still usable, and allows users to experiment with combinations of information that I don’t think can be seen other places. Overall, this is a terrific project. Great teamwork too.

\- Marti Hearst, Lead Instructor of <a href="http://www.ischool.berkeley.edu/courses/i247" class="underlined-link" target= "blank">
INFO 247: Information Visualization and Presentation
<span class="fa fa-external-link no-underline"></span></a> and professor at UC Berkeley School of Information and EECS.
<br /><br />

**Project Duration:** April 2016 to May 2016
<br /><br />
<br /><br />
