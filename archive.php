<?php

get_header(); ?>

	
		<?php
		if ( have_posts() ) : ?>

			<!-- add wrappers here -->

			<?php
			/* Start the Loop */
			while ( have_posts() ) : the_post();

				// add post markup or templates
				
			endwhile;

			// close wrappers here 

		endif; ?>


<?php
get_sidebar();
get_footer();
