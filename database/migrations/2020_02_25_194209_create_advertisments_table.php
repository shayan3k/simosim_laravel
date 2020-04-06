<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdvertismentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('advertisments', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('phonenumber')->unique();
            $table->string('location');
            $table->string('text');
            $table->string('price');
            $table->string('secondprice');
            $table->string('operator');
            $table->string('code');
            $table->string('value');
            $table->string('rond');
            $table->string('simstatus');
            $table->string('sale')->nullable;
            $table->boolean('published');
            $table->boolean('sold');
            $table->timestamps();
            $table->integer('user_id');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('advertisments');
    }
}
