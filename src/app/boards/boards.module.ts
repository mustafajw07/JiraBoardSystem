import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { BoardsRoutingModule } from './boards-routing.module';
import { AddBoardComponent } from './components/add-board/add-board.component';
import { BoardsTableComponent } from './components/boards-table/boards-table.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { StoryBoardComponent } from './components/story-board/story-board.component';
import { UserSelectorComponent } from './components/user-selector/user-selector.component';
import { AllBoardsComponent } from './pages/all-boards/all-boards.component';
import { ProjectBoardComponent } from './pages/project-board/project-board.component';
import { AddSprintComponent } from './components/add-sprint/add-sprint.component';
import { AddStoryComponent } from './components/add-story/add-story.component';

@NgModule({
  declarations: [
    AllBoardsComponent,
    AddBoardComponent,
    BoardsTableComponent,
    ProjectBoardComponent,
    SideBarComponent,
    UserSelectorComponent,
    StoryBoardComponent,
    AddSprintComponent,
    AddStoryComponent,
  ],
  imports: [CommonModule, SharedModule, BoardsRoutingModule],
})
export class BoardsModule {}
