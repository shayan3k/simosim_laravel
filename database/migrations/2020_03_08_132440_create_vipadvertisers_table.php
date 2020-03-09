<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Schema;

class CreateVipadvertisersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vipadvertisers', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->text('title');
            $table->text('advertisername');
            $table->text('text');
            $table->text('shopname');
            $table->json('phonenumbers');
            $table->json('contactnumber');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vipadvertisers');
    }
}
