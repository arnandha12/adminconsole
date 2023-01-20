define({
    /*
      This is an auto generated file and any modifications to it may result in corruption of the action sequence.
    */
    /** onClick defined for btnSimulateSimulation **/
    AS_Button_a29f008d666c490e96fa90b74beaa8f8: function AS_Button_a29f008d666c490e96fa90b74beaa8f8(eventobject) {
        var self = this;
        return self.getGuestSimulationResults.call(this);
    },
    /** onClick defined for btCancelMEC **/
    AS_Button_cca8c9081dc1443e8639c55587bed34b: function AS_Button_cca8c9081dc1443e8639c55587bed34b(eventobject) {
        var self = this;
        this.fromAddInfo = true;
        this.view.flxEligibilityCheck.isVisible = false;
        this.view.flxDisabledBackground.isVisible = false;
    },
    /** onClick defined for btSubmitMEC **/
    AS_Button_cf9965396b6542e4b40d1d81a7956b4b: function AS_Button_cf9965396b6542e4b40d1d81a7956b4b(eventobject) {
        var self = this;
        this.submitMemberEligability();
    },
    /** onClick defined for btnSave **/
    AS_Button_dc9275c66a444d6189cbe4a809b09fb3: function AS_Button_dc9275c66a444d6189cbe4a809b09fb3(eventobject) {
        var self = this;
        return self.displayContactInfoOnGuestDashboardAfterSaving.call(this);
    },
    /** onClick defined for btnBackToMain **/
    AS_Button_f5330200c5bf4bcdad11d8d2a31158f7: function AS_Button_f5330200c5bf4bcdad11d8d2a31158f7(eventobject) {
        var self = this;
        this.navigateToSearchCustomerScreen();
    },
    /** onClick defined for btnCancel **/
    AS_Button_f7910f38910d4a7c8b01cf1cb79c5818: function AS_Button_f7910f38910d4a7c8b01cf1cb79c5818(eventobject) {
        var self = this;
        return self.closeAddInfoPopUp.call(this);
    },
    /** onClick defined for btnSimulateGuestSimulation **/
    AS_Button_g8a5fbbeb3b44b32a3a47ccf0575b7be: function AS_Button_g8a5fbbeb3b44b32a3a47ccf0575b7be(eventobject) {
        var self = this;
        this.getGuestSimulationResults();
    },
    /** onClick defined for flxSimulationBack **/
    AS_FlexContainer_acb477fe399247b7a1d371d1105b1bc2: function AS_FlexContainer_acb477fe399247b7a1d371d1105b1bc2(eventobject) {
        var self = this;
        this.navigateBackToDashboard();
    },
    /** onClick defined for flxAddingInfo **/
    AS_FlexContainer_d0ffad8531c1406e8870973ff83f5920: function AS_FlexContainer_d0ffad8531c1406e8870973ff83f5920(eventobject) {
        var self = this;
        self.openAddInfoPopUp.call(this);
        this.fromAddInfo = true;
    },
    /** onClick defined for flxGuestSimulationBack **/
    AS_FlexContainer_de8bb540898d425c83095fb257783f2d: function AS_FlexContainer_de8bb540898d425c83095fb257783f2d(eventobject) {
        var self = this;
        this.navigateBackToDashboard();
    },
    /** onClick defined for flxAddInfo **/
    AS_FlexContainer_e9b811ef795f473497a87fa8527d7891: function AS_FlexContainer_e9b811ef795f473497a87fa8527d7891(eventobject) {
        var self = this;
        return self.openAddInfoPopUp.call(this);
    },
    /** onHover defined for flxGuestSimulateResults **/
    AS_FlexContainer_g4404d619b314c208891429cb3427583: function AS_FlexContainer_g4404d619b314c208891429cb3427583(eventobject, context) {
        var self = this;
    },
    /** onClick defined for flxSimulate **/
    AS_FlexContainer_h44f59d4f5964018a43ebc2d9a41961f: function AS_FlexContainer_h44f59d4f5964018a43ebc2d9a41961f(eventobject) {
        var self = this;
        this.startLoansGuestSimulation();
    },
    /** onClick defined for flxApply **/
    AS_FlexContainer_h61129942df04779be2c71ed0f092bc4: function AS_FlexContainer_h61129942df04779be2c71ed0f092bc4(eventobject) {
        var self = this;
        this.applyAction();
    },
    /** preShow defined for frmGuestDashboard **/
    AS_Form_ie05e80f37a8465c916e3d7e4ccad97d: function AS_Form_ie05e80f37a8465c916e3d7e4ccad97d(eventobject) {
        var self = this;
        this.guestDashboardPreShow();
    },
    /** onTouchStart defined for imgLogout **/
    AS_Image_a336b3eaad6b4580b9a8679a66806fac: function AS_Image_a336b3eaad6b4580b9a8679a66806fac(eventobject, x, y) {
        var self = this;
        this.logoutAction();
    },
    /** onTouchEnd defined for imgCancelMEC **/
    AS_Image_c5cf132c9c494e09ac65e7b529afb165: function AS_Image_c5cf132c9c494e09ac65e7b529afb165(eventobject, x, y) {
        var self = this;
        this.view.flxEligibilityCheck.isVisible = false;
        this.view.flxDisabledBackground.isVisible = false;
    },
    /** onTouchEnd defined for lblRegistrationLinkKA **/
    AS_Label_b5befc3b01724c89a3ada56766fe60f6: function AS_Label_b5befc3b01724c89a3ada56766fe60f6(eventobject, x, y) {
        var self = this;
        this.registrationOnClick();
    },
    /** onTouchStart defined for lblCloseAddInfoPopupIcon **/
    AS_Label_ea41663423704d7abbeeda75b18fb15a: function AS_Label_ea41663423704d7abbeeda75b18fb15a(eventobject, x, y) {
        var self = this;
        this.view.flxAddInformationPopup.isVisible = false;
        this.view.flxDisabledBackground.isVisible = false;
    },
    /** onTouchEnd defined for lblEmailoptionKA **/
    AS_Label_f6731768bc634e689788af8e78456393: function AS_Label_f6731768bc634e689788af8e78456393(eventobject, x, y) {
        var self = this;
        this.sendEmail();
    },
    /** onSelection defined for lstBoxEmploymentStatusGuestSimulation **/
    AS_ListBox_b735d13044624f8fbb4bc312274e59c4: function AS_ListBox_b735d13044624f8fbb4bc312274e59c4(eventobject) {
        var self = this;
        this.view.lstBoxEmploymentStatusGuestSimulation.skin = "sknlstbx485c7513px";
        this.view.lblGuestSimulationEmploymentStatusError.setVisibility(false);
    },
    /** onSelection defined for ListBoxLoanTypes **/
    AS_ListBox_d349e717955c4d72969ecf1a1c3bc550: function AS_ListBox_d349e717955c4d72969ecf1a1c3bc550(eventobject) {
        var self = this;
        this.view.ListBoxLoanTypes.skin = "sknlstbx485c7513px";
        this.view.lblLoanTypeError.setVisibility(false);
        if (this.view.ListBoxLoanTypes.selectedKey == "4") {
            this.view.flxSimulate.setVisibility(false);
        } else {
            this.view.flxSimulate.setVisibility(true);
        }
    },
    /** onSelection defined for lstBoxLoanTypeGuestSimulation **/
    AS_ListBox_ddd49aa9f7e741f497c50a84f892e442: function AS_ListBox_ddd49aa9f7e741f497c50a84f892e442(eventobject) {
        var self = this;
        this.view.lstBoxLoanTypeGuestSimulation.skin = "sknlstbx485c7513px";
        this.view.lblGuestSimulationLoanTypeError.setVisibility(false);
    },
    /** onSelection defined for rbgResponse **/
    AS_RadioButtonGroup_h9845aa69c4841bf940e438d693d7f19: function AS_RadioButtonGroup_h9845aa69c4841bf940e438d693d7f19(eventobject) {
        var self = this;
        this.getMembershipStatus();
    },
    /** onRowClick defined for segSimulationResults **/
    AS_Segment_b1482cdbba954a6ca2f872076a5b8fb4: function AS_Segment_b1482cdbba954a6ca2f872076a5b8fb4(eventobject, sectionNumber, rowNumber) {
        var self = this;
    },
    /** onRowClick defined for segSimulationResultsGuestSimulation **/
    AS_Segment_da264392af274531b895a0515837e5c6: function AS_Segment_da264392af274531b895a0515837e5c6(eventobject, sectionNumber, rowNumber) {
        var self = this;
        return self.applyAction.call(this);
    },
    /** onKeyUp defined for txtLoanAmountGuestSimulation **/
    AS_TextField_gf4d08da5a0749d591a0c3a28a9b8fc0: function AS_TextField_gf4d08da5a0749d591a0c3a28a9b8fc0(eventobject) {
        var self = this;
        this.view.txtLoanAmountGuestSimulation.skin = "sknTbxFFFFFFBorDEDEDE13pxKA";
        this.view.lblGuestSimulationLoanAmountError.setVisibility(false);
    }
});