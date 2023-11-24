import React from "react";
import { getLayout } from "../../components/DesignSystem/DSLayout";
import Anchor from "@/components/DesignSystem/DSanchor";

const DSpage = () => {
  return (
    <>
      <h1 className="mb-8">Scrollbars</h1>

      {/* Primary */}
      <div className="mb-12">
        <Anchor title="Primary" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-stretch">
              <div className="flex-1 surface rounded-lg overflow-y-scroll h-64 scrollbar scrollbar-primary">
                <div className="p-4 space-y-8 text-ui-200 leading-loose">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus faucibus ipsum in turpis efficitur, nec euismod
                    leo facilisis. Vestibulum risus felis, ultrices eu cursus a,
                    dignissim sed risus. Morbi fermentum turpis non arcu
                    faucibus, a placerat purus imperdiet. Aliquam vel libero
                    arcu. Aenean nec massa quis ex varius tincidunt. Nam eget
                    sem gravida, imperdiet mi vel, facilisis nisl. Aenean ac
                    interdum lorem. Mauris sit amet libero non elit tristique
                    luctus. Aliquam non tristique nunc. Vivamus laoreet tellus
                    et metus mattis, eget semper nunc efficitur. Donec lobortis
                    tempus massa, ut lobortis mi posuere nec. Sed luctus erat
                    vel placerat volutpat. Praesent in porttitor leo, quis
                    mollis lacus. Cras quis mi feugiat, vehicula sem sit amet,
                    placerat nisl. Pellentesque euismod, neque in placerat
                    tempus, arcu lectus lacinia nibh, vitae mollis ipsum orci at
                    nulla. Integer varius diam sit amet felis porta consequat.
                  </p>
                  <p>
                    Nulla convallis risus a rutrum consectetur. In egestas felis
                    vel porttitor vehicula. Donec commodo est sit amet massa
                    ultrices egestas. Praesent tristique quam sed sagittis
                    tempus. Integer eu hendrerit urna, quis faucibus augue.
                    Vivamus rutrum consequat faucibus. Nulla a faucibus dui.
                    Vivamus molestie mauris nec orci fermentum molestie.
                    Suspendisse potenti.
                  </p>
                  <p>
                    Aenean volutpat nisl quis est ultrices, ut rhoncus magna
                    euismod. Praesent magna eros, suscipit non sagittis vitae,
                    fringilla eu orci. Nulla fermentum sapien dictum lectus
                    cursus suscipit. Nunc porta libero posuere, laoreet tellus
                    at, pretium lorem. Sed sed leo a odio egestas iaculis eu et
                    magna. Sed mollis tincidunt urna, ac sagittis nisl posuere
                    vitae. Donec ut nunc a dui imperdiet porttitor. Vivamus et
                    condimentum lectus. Integer mattis purus sed sem tincidunt,
                    ut condimentum lacus condimentum. Proin ac nunc sit amet
                    urna accumsan dapibus. Quisque tempor eros vel venenatis
                    aliquet. Aenean neque elit, molestie id nisi a, volutpat
                    interdum eros. Sed dictum dolor et ligula egestas, sed
                    tincidunt est elementum.
                  </p>
                  <p>
                    Proin purus odio, lacinia lobortis libero quis, venenatis
                    laoreet nisi. Cras cursus a justo vitae consectetur. Morbi
                    sed vehicula libero. Ut quam nunc, auctor eget massa at,
                    posuere posuere leo. Morbi dui eros, volutpat non
                    consectetur id, tristique eu risus. Suspendisse potenti.
                    Mauris malesuada blandit efficitur.
                  </p>
                  <p>
                    Ut enim elit, varius vitae lacus eget, convallis tristique
                    libero. Ut quis ex orci. Sed imperdiet nisl eu eleifend
                    lobortis. Etiam quis dolor est. Vestibulum vitae mauris at
                    leo dignissim hendrerit. Vivamus hendrerit, nisi non luctus
                    mollis, mi ipsum volutpat elit, non semper mauris tellus non
                    nulla. Quisque eget luctus elit. Aenean sit amet luctus
                    felis, vel efficitur ante.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="200"
                  src="//jsfiddle.net/augustin_hiebel/h90quLwa/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary */}
      <div className="mb-12">
        <Anchor title="Secondary" small="default" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-stretch">
              <div className="flex-1 surface rounded-lg overflow-y-scroll h-64 scrollbar scrollbar-secondary">
                <div className="p-4 space-y-8 text-ui-200 leading-loose">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus faucibus ipsum in turpis efficitur, nec euismod
                    leo facilisis. Vestibulum risus felis, ultrices eu cursus a,
                    dignissim sed risus. Morbi fermentum turpis non arcu
                    faucibus, a placerat purus imperdiet. Aliquam vel libero
                    arcu. Aenean nec massa quis ex varius tincidunt. Nam eget
                    sem gravida, imperdiet mi vel, facilisis nisl. Aenean ac
                    interdum lorem. Mauris sit amet libero non elit tristique
                    luctus. Aliquam non tristique nunc. Vivamus laoreet tellus
                    et metus mattis, eget semper nunc efficitur. Donec lobortis
                    tempus massa, ut lobortis mi posuere nec. Sed luctus erat
                    vel placerat volutpat. Praesent in porttitor leo, quis
                    mollis lacus. Cras quis mi feugiat, vehicula sem sit amet,
                    placerat nisl. Pellentesque euismod, neque in placerat
                    tempus, arcu lectus lacinia nibh, vitae mollis ipsum orci at
                    nulla. Integer varius diam sit amet felis porta consequat.
                  </p>
                  <p>
                    Nulla convallis risus a rutrum consectetur. In egestas felis
                    vel porttitor vehicula. Donec commodo est sit amet massa
                    ultrices egestas. Praesent tristique quam sed sagittis
                    tempus. Integer eu hendrerit urna, quis faucibus augue.
                    Vivamus rutrum consequat faucibus. Nulla a faucibus dui.
                    Vivamus molestie mauris nec orci fermentum molestie.
                    Suspendisse potenti.
                  </p>
                  <p>
                    Aenean volutpat nisl quis est ultrices, ut rhoncus magna
                    euismod. Praesent magna eros, suscipit non sagittis vitae,
                    fringilla eu orci. Nulla fermentum sapien dictum lectus
                    cursus suscipit. Nunc porta libero posuere, laoreet tellus
                    at, pretium lorem. Sed sed leo a odio egestas iaculis eu et
                    magna. Sed mollis tincidunt urna, ac sagittis nisl posuere
                    vitae. Donec ut nunc a dui imperdiet porttitor. Vivamus et
                    condimentum lectus. Integer mattis purus sed sem tincidunt,
                    ut condimentum lacus condimentum. Proin ac nunc sit amet
                    urna accumsan dapibus. Quisque tempor eros vel venenatis
                    aliquet. Aenean neque elit, molestie id nisi a, volutpat
                    interdum eros. Sed dictum dolor et ligula egestas, sed
                    tincidunt est elementum.
                  </p>
                  <p>
                    Proin purus odio, lacinia lobortis libero quis, venenatis
                    laoreet nisi. Cras cursus a justo vitae consectetur. Morbi
                    sed vehicula libero. Ut quam nunc, auctor eget massa at,
                    posuere posuere leo. Morbi dui eros, volutpat non
                    consectetur id, tristique eu risus. Suspendisse potenti.
                    Mauris malesuada blandit efficitur.
                  </p>
                  <p>
                    Ut enim elit, varius vitae lacus eget, convallis tristique
                    libero. Ut quis ex orci. Sed imperdiet nisl eu eleifend
                    lobortis. Etiam quis dolor est. Vestibulum vitae mauris at
                    leo dignissim hendrerit. Vivamus hendrerit, nisi non luctus
                    mollis, mi ipsum volutpat elit, non semper mauris tellus non
                    nulla. Quisque eget luctus elit. Aenean sit amet luctus
                    felis, vel efficitur ante.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="200"
                  src="//jsfiddle.net/augustin_hiebel/0um5type/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop only */}
      <div className="mb-12">
        <Anchor title="Desktop only" />

        <div className="">
          <div className="">
            <div className="flex gap-4 flex-col lg:flex-row lg:items-stretch">
              <div className="flex-1 surface rounded-lg overflow-y-scroll h-64 scrollbar-desktop">
                <div className="p-4 space-y-8 text-ui-200 leading-loose">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Phasellus faucibus ipsum in turpis efficitur, nec euismod
                    leo facilisis. Vestibulum risus felis, ultrices eu cursus a,
                    dignissim sed risus. Morbi fermentum turpis non arcu
                    faucibus, a placerat purus imperdiet. Aliquam vel libero
                    arcu. Aenean nec massa quis ex varius tincidunt. Nam eget
                    sem gravida, imperdiet mi vel, facilisis nisl. Aenean ac
                    interdum lorem. Mauris sit amet libero non elit tristique
                    luctus. Aliquam non tristique nunc. Vivamus laoreet tellus
                    et metus mattis, eget semper nunc efficitur. Donec lobortis
                    tempus massa, ut lobortis mi posuere nec. Sed luctus erat
                    vel placerat volutpat. Praesent in porttitor leo, quis
                    mollis lacus. Cras quis mi feugiat, vehicula sem sit amet,
                    placerat nisl. Pellentesque euismod, neque in placerat
                    tempus, arcu lectus lacinia nibh, vitae mollis ipsum orci at
                    nulla. Integer varius diam sit amet felis porta consequat.
                  </p>
                  <p>
                    Nulla convallis risus a rutrum consectetur. In egestas felis
                    vel porttitor vehicula. Donec commodo est sit amet massa
                    ultrices egestas. Praesent tristique quam sed sagittis
                    tempus. Integer eu hendrerit urna, quis faucibus augue.
                    Vivamus rutrum consequat faucibus. Nulla a faucibus dui.
                    Vivamus molestie mauris nec orci fermentum molestie.
                    Suspendisse potenti.
                  </p>
                  <p>
                    Aenean volutpat nisl quis est ultrices, ut rhoncus magna
                    euismod. Praesent magna eros, suscipit non sagittis vitae,
                    fringilla eu orci. Nulla fermentum sapien dictum lectus
                    cursus suscipit. Nunc porta libero posuere, laoreet tellus
                    at, pretium lorem. Sed sed leo a odio egestas iaculis eu et
                    magna. Sed mollis tincidunt urna, ac sagittis nisl posuere
                    vitae. Donec ut nunc a dui imperdiet porttitor. Vivamus et
                    condimentum lectus. Integer mattis purus sed sem tincidunt,
                    ut condimentum lacus condimentum. Proin ac nunc sit amet
                    urna accumsan dapibus. Quisque tempor eros vel venenatis
                    aliquet. Aenean neque elit, molestie id nisi a, volutpat
                    interdum eros. Sed dictum dolor et ligula egestas, sed
                    tincidunt est elementum.
                  </p>
                  <p>
                    Proin purus odio, lacinia lobortis libero quis, venenatis
                    laoreet nisi. Cras cursus a justo vitae consectetur. Morbi
                    sed vehicula libero. Ut quam nunc, auctor eget massa at,
                    posuere posuere leo. Morbi dui eros, volutpat non
                    consectetur id, tristique eu risus. Suspendisse potenti.
                    Mauris malesuada blandit efficitur.
                  </p>
                  <p>
                    Ut enim elit, varius vitae lacus eget, convallis tristique
                    libero. Ut quis ex orci. Sed imperdiet nisl eu eleifend
                    lobortis. Etiam quis dolor est. Vestibulum vitae mauris at
                    leo dignissim hendrerit. Vivamus hendrerit, nisi non luctus
                    mollis, mi ipsum volutpat elit, non semper mauris tellus non
                    nulla. Quisque eget luctus elit. Aenean sit amet luctus
                    felis, vel efficitur ante.
                  </p>
                </div>
              </div>
              <div className="flex-1">
                <iframe
                  className="rounded"
                  width="100%"
                  height="200"
                  src="//jsfiddle.net/augustin_hiebel/Lz4th9go/embedded/html/dark/?bodyColor=212333&menuColor=1C1D2C&fontColor=FFFFFF&accentColor=F3C351"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

DSpage.getLayout = getLayout;

export default DSpage;
