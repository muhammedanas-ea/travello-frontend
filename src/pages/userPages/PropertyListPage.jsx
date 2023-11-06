import PropertySearch from "../../components/userComponents/propertySearch/PropertySearch";
import PropertyList from "../../components/userComponents/propertyList/PropertyList";
import PropertySort from "../../components/userComponents/propertySort/PropertySort";

export default function PropertyListPage() {
  return (
    <div className="py-10">
      <div className="contai-section">
        <PropertySearch />
        <PropertySort/>
        <PropertyList />
      </div>
    </div>
  );
}
