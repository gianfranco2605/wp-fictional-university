<?php

get_header();
pageBanner(
    array(
        'title'    => 'Our Campuses',
        'subtitle' => 'Sleep with us and enjoing'
    )
);
?>

<div class="container container--narrow page-section">

    <div class="acf-map">
        <?php
        while (have_posts()) {
            the_post();
            $mapLocations = get_field('map_location')  ?>
            <div data-lat="<?php echo $mapLocations['lat'] ?>" data-lng="<?php echo $mapLocations['lng'] ?>" class="marker">
                <h3><a href="<?php the_permalink() ?>"><?php the_title() ?></a></h3>
                <?php echo $mapLocations['address'] ?>
            </div>

        <?php } ?>
    </div>

</div>
<?php
get_footer();
