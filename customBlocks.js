
goog.require('Blockly.Blocks');

/************************
 *  BLOCKLY DEFINITIONS  *
 *************************/

Blockly.Blocks['whenrunclicked'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("When RUN is clicked");
        this.setNextStatement(true, null);
        this.setColour(65);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['clearscreen'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Clear Canvas");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['catpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Cat Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "catIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dogpose'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Change Dog Pose")
            .appendField(new Blockly.FieldDropdown([["1","1"], ["2","2"], ["3","3"]]), "dogIndex");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(111);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['say'] = {
    init: function() {
        this.appendDummyInput()
        this.appendValueInput("STRING")
            .appendField("Say");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(333);
        this.setTooltip("");
        this.setHelpUrl("");
        this.setInputsInline(true);
    }
};

Blockly.Blocks['catmove'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Cat")
            .appendField(new Blockly.FieldNumber('100'), 'CATMOVE');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(175);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.Blocks['dogmove'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Move Dog")
            .appendField(new Blockly.FieldNumber('100'), 'DOGMOVE');
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(111);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

Blockly.JavaScript['whenrunclicked'] = function(block) {
    var statements_name = Blockly.JavaScript.statementToCode(block, 'NAME');
    var blockCode = statements_name;
    return blockCode;
};

Blockly.JavaScript['clearscreen'] = function(block) {
    var blockCode = 'clearCanvas();';
    return blockCode;
};

Blockly.JavaScript['catpose'] = function(block) {
    var dropdown_catindex = block.getFieldValue('catIndex');
    var blockCode = 'updateCatPose('+dropdown_catindex+');';
    return blockCode;
};

Blockly.JavaScript['dogpose'] = function(block) {
    var dropdown_dogindex = block.getFieldValue('dogIndex');
    var blockCode = 'updateDogPose('+dropdown_dogindex+');';
    return blockCode;
};

Blockly.JavaScript['say'] = function(block) {
    // var say_text = block.getFieldValue('STRING');
    var say_text = Blockly.JavaScript.valueToCode(block, 'STRING', Blockly.JavaScript.ORDER_ADDITION) || ''
    var blockCode = 'say('+say_text+');';
    return blockCode;
};

Blockly.JavaScript['catmove'] = function(block) {
    var move_amount = block.getFieldValue('CATMOVE');
    var blockCode = 'updateCatPosition('+move_amount+');';
    return blockCode;
};

Blockly.JavaScript['dogmove'] = function(block) {
    var move_amount = block.getFieldValue('DOGMOVE');
    var blockCode = 'updateDogPosition('+move_amount+');';
    return blockCode;
};
