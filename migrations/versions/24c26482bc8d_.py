"""empty message

Revision ID: 24c26482bc8d
Revises: 63db0c49d3d0
Create Date: 2023-11-13 20:44:02.898308

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '24c26482bc8d'
down_revision = '63db0c49d3d0'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.add_column(sa.Column('icon', sa.String(length=400), nullable=True))

    with op.batch_alter_table('subcategory', schema=None) as batch_op:
        batch_op.add_column(sa.Column('image', sa.String(length=400), nullable=True))

    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    with op.batch_alter_table('subcategory', schema=None) as batch_op:
        batch_op.drop_column('image')

    with op.batch_alter_table('category', schema=None) as batch_op:
        batch_op.drop_column('icon')

    # ### end Alembic commands ###
