class DisplayObject{
    constructor(type, surface, isAnimated, color){
        this.type = type;
        this.surface = surface;
        this.isAnimated = isAnimated;
        this.color = color;
        this.surface = surface;
        this.oldMaterial = null;
        //['Cube', 'Sphere','Cone','Cylinder','Torus','Tea pot']
        this.geometries = {
            "Sphere": new THREE.SphereGeometry( 1, 32, 32 ),
            "Cube": new THREE.BoxGeometry( 1, 1, 1 ),
            "Cylinder": new THREE.CylinderGeometry( 1, 1, 3, 32 ),
            "Torus": new THREE.TorusGeometry( 1, 0.5, 16, 100 ), //radius, tube, radialSegments, tubularSegments
            "Cone": new THREE.ConeGeometry( 1, 3, 32 ),
        }
        this.materials = {
            "Solid": new THREE.MeshStandardMaterial( { color: this.color } )
        }
        this.mesh = new THREE.Mesh(this.geometries[type], this.materials[surface]);
    }
    updateGeometry(type){
        this.mesh.geometry.dispose();
        this.mesh.geometry = this.geometries[type];
    }
    updateColor(color){
        this.mesh.material.color.set(color);
    }
    updateSurface(){}
    
}