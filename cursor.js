AFRAME.registerComponent("cursor-listener", {
    schema: {
      selectedItemId: { default: "", type: "string" },
    },
    init: function () {
      this.handleMouseEnterEvents();
      this.handleMouseLeaveEvents();
      
    },
     handleMouseLeaveEvents:function(){
       this.el.addEventListener("mouseLeave",()=>{
        const {selectedItemId}=this.data
        if(selectedItemId){
          const el=document.querySelector(`#${selectedItemId}`)
          const id=el.getAttribute("id")
         if(id===selectedItemId) {
          el.setAttribute("material",{
            color:"#0077CC",
            opacity:1
          })
         }
        }
      })
     }, 
  
    handlePlacesListState: function () {
      const id = this.el.getAttribute("id");
      const placesId = ["bake-bihari", "jagannath", "Prem-mandir", "vrindavan"];
      if (placesId.includes(id)) {
        const placeContainer = document.querySelector("#places-container");
        placeContainer.setAttribute("cursor-listener", {
          selectedItemId: id,
        });
        this.el.setAttribute("material", {
          color: "#D76B30",
          opacity: 1,
        });
      }
    },
    handleMouseEnterEvents: function () {
      // Mouse Enter Events
      this.el.addEventListener("mouseenter", () => {
        this.handlePlacesListState();
      });
    },
    handleMouseLeaveEvents: function () {
      // Mouse Leave Events
      
    },
  });