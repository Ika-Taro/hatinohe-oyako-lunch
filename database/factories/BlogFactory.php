<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Blog>
 */
class BlogFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'shop_name' => $this->faker->name(),
            'shop_category' => rand(1,6),
            'kindness_rating' => rand(1,5),
            'children_chair' => rand(1,2),
            'tatami_room' => rand(1,2),
            'crib' => rand(1,2),
            'parent_review' => $this->faker->realText(10),
            'children_review' => $this->faker->realText(10),
        ];
    }
}
